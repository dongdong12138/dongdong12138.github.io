---
sidebar_position: 4
---

# Promise 自定义封装

## 整体结构框架

```js
/**
 * 自定义 Promise 函数模块：IIFE
 */
(function (window) {

  const PENDING = 'pending'
  const RESOLVED = 'fulfilled'
  const REJECTED = 'rejected'

  /**
   * Promise 构造函数
   * @param {function} executor 执行器函数（同步执行）(resolve, reject) => {}
   */
  function Promise(executor) {

  }

  /**
   * Promise 原型对象的 then 方法
   * 指定成功和失败的回调函数
   * @param {function} onResolved 成功的回调函数(value) => {}
   * @param {function} onRejected 失败的回调函数(reason) => {}
   * @returns 返回一个新的 promise 对象，结果由 onResolved/onRejected 回调函数执行的结果决定
   */
  Promise.prototype.then = function (onResolved, onRejected) {

  }

  /**
   * Promise 原型对象的 catch 方法
   * 指定失败的回调函数
   * @param {function} onRejected 失败的回调函数(reason) => {}
   * @returns 返回一个新的 promise 对象
   */
  Promise.prototype.catch = function (onRejected) {

  }

  /**
   * Promise函数对象的 resolve 方法
   * @param {*} value 成功的值
   * @returns 返回一个成功/失败的 promise 对象
   */
  Promise.resolve = function (value) {

  }

  /**
   * Promise 函数对象的 reject 方法
   * @param {*} resaon 失败的原因
   * @returns 返回一个失败的 promise 对象
   */
  Promise.reject = function (resaon) {

  }

  /**
   * Promise 函数对象的 all 方法
   * @param {Array<Promise>} promises
   * @returns 返回一个 promise 对象，只有当所有 promise 都成功时才成功，否则只要有一个失败就失败
   */
  Promise.all = function (promises) {

  }

  /**
   * Promise 函数对象的 race 方法
   * @param {Array<Promise>} promises
   * @returns 返回一个 promise 对象，其结果由第一个完成的 promise 决定
   */
  Promise.race = function (promises) {

  }

  // 向外暴露 MyPromise 函数
  window.MyPromise = Promise

})(window)
```

## Promise 构造函数

```js
/**
 * Promise 构造函数
 * @param {*} executor 执行器函数（同步执行）(resolve, reject) => {}
 */
function Promise(executor) {

  const self = this		// 保存当前实例对象的 this 的值

  // 添加属性
  self.PromiseState = PENDING		// 给 promise 对象指定 status 属性，初始值为 pending
  self.PromiseResult = null			// 给 promise 对象指定一个用于存储结果数据的属性
  self.callbacks = []						// 存的是对象，每个元素的结构：{ onResolved() {}, onRejected() {} }

  /**
   * executor 内部定义成功时调用的函数
   * @param {*} value 成功的值
   * @returns 
   */
  function resolve(value) {
    // 如果当前状态不是 pending，直接结束
    if (self.PromiseState !== PENDING) return
    // 1. 修改对象的状态（promiseState）为 fulfilled
    self.PromiseState = RESOLVED 
    // 2. 设置对象结果值（promiseResult）为 value
    self.PromiseResult = value
    // 如果有待执行的 callback 函数，立即【异步】执行回调函数 onResolved
    if (self.callbacks.length > 0) {
      setTimeout(() => {		// 放入队列中执行所有成功的回调
        self.callbacks.forEach(callbackObj => {
          callbackObj.onResolved(value)
        })
      }, 0)
    }
  }

  /**
   * executor 内部定义失败时调用的函数
   * @param {*} reason 失败的原因
   * @returns 
   */
  function reject(reason) {
    // 如果当前状态不是 pending，直接结束
    if (self.PromiseState !== PENDING) return
    // 1. 修改对象的状态（promiseState）为 rejected
    self.PromiseState = REJECTED
    // 2. 设置对象结果值（promiseResult）为 reason
    self.PromiseResult = reason
    // 如果有待执行的 callback 函数，立即【异步】执行回调函数 onRejected
    if (self.callbacks.length > 0) {
      setTimeout(() => {		// 放入队列中执行所有失败的回调
        self.callbacks.forEach(callbackObj => {
          callbackObj.onRejected(reason)
        })
      }, 0)
    }
  }

  // 立即【同步】执行 executor 函数
  try {
    executor(resolve, reject)
  } catch(error) {		// 如果执行器抛出异常，promise 对象变成 rejected 状态
    reject(error)
  }
}
```

## Promise.prototype.then

```js
Promise.prototype.then = function (onResolved, onRejected) {
  const self = this
  // 返回的新的 promise 的结果，取决于回调函数 onResolved/onRejected 的返回结果
  // 这两个回调的返回结果，决定了返回的这个新 promise 中是调 resolve 还是 reject
  return new Promise((resolve, reject) => {
    // 如果当前状态还是 pending，就将回调函数保存起来
    if (self.PromiseState === PENDING) {
      self.callbacks.push({
        onResolved(value) {
          // 将回调存到 self.callbacks 中时不用 setTimeout
          // 因为当调用 self.callbacks 中的回调函数时，应该是异步调用的
          try {
            // 执行成功的回调，result 接收返回值
            const result = onResolved(self.PromiseResult)		// 这里也可以传 value
            if (result instanceof Promise) {	// 3. 如果回调函数返回的是 promise
              // 正常写法
              // result.then(
              //   value => resolve(value)		// 当result成功时，让return的promise也成功
              //   reason => reject(reason)		// 当result失败时，让return的promise也失败
              // )
              // 简洁写法
              result.then(resolve, reject)
            } else {													// 2. 如果回调函数返回的不是 promise
              resolve(result)
            }
          } catch (error) {										// 1. 如果抛出异常
            reject(error)
          }
        },
        onRejected(reason) {
          try {
            // 执行失败的回调，result 接收返回值
            const result = onRejected(self.PromiseResult)		// 这里也可以传 reason
            if (result instanceof Promise) {	// 3. 如果回调函数返回的是 promise
              result.then(resolve, reject)
            } else {													// 2. 如果回调函数返回的不是 promise
              resolve(result)
            }
          } catch (error) {										// 1. 如果抛出异常
            reject(error)
          }
        }
      })
    }
    // 如果当前状态是 fulfilled
    if (self.PromiseState === RESOLVED) {
      setTimeout(() => {
        /**
         * 1. 如果抛出异常，return 的 promise 就会失败，reason 是 error
         * 2. 如果回调函数返回的不是 promise，return 的 promise 就会成功，value 就是返回的值
         * 3. 如果回调函数返回的是 promise，return 的 promise 结果就是这个 promise 的结果
         */
        try {
          const result = onResolved(self.PromiseResult) // 执行成功的回调 result接收返回值
          if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
            // 正常写法
            // result.then(
            //   value => resolve(value)	// 当 result 成功时，让 return 的 promise 也成功
            //   reason => reject(reason)	// 当 result 失败时，让 return 的 promise 也失败
            // )
            // 简洁写法
            result.then(resolve, reject)
          } else {												// 2. 如果回调函数返回的不是 promise
            resolve(result)
          }
        } catch (error) {									// 1. 如果抛出异常
          reject(error)
        }
      }, 0)
    }
    // 如果当前状态是 rejected
    if (self.PromiseState === REJECTED) {
      setTimeout(() => {
        try {
          // 执行失败的回调，result 接收返回值
          const result = onRejected(self.PromiseResult)
          if (result instanceof Promise) {	// 3. 如果回调函数返回的是 promise
            result.then(resolve, reject)
          } else {													// 2. 如果回调函数返回的不是 promise
            resolve(result)
          }
        } catch (error) {										// 1. 如果抛出异常
          reject(error)
        }
      }, 0)
    }
  })
}
```

上面的“简洁写法”，类似于以下代码：

```js
function fn(event) {
  // doSomething
}

// 完整写法
div.onclick = function (event) {
  fn(event)
}

// 简化写法
div.onclick = fn
```

把 `then` 方法的代码简化封装一下：

```js
/**
 * Promise 原型对象的 then 方法 
 * 指定成功和失败的回调函数
 * @param {function} onResolved 成功的回调函数 (value) => {}
 * @param {function} onRejected 失败的回调函数 (reason) => {}
 * @returns 返回一个新的 promise 对象，结果由 onResolved/onRejected 执行的结果决定
 */
Promise.prototype.then = function (onResolved, onRejected) {
  // 在使用 then 时，onResolved 也可能不传
  // 比如：catch（catch 是 then 的一个语法糖），catch 只需要传 onRejected 即可
  // 保险起见，需要给 onResolved 指定一个默认值
  // 对于 onResolved 来说，只需要将成功的值 return 出去，向后传递即可
  // 指定默认的成功的回调 onResolved（向后传递成功的 value）
  onResolved = typeof onResolved === 'function' ? onResolved : value => value
  // 在使用 then 时，onRejected 函数也可以不传
  // 如果没传，当 promise 的状态为失败时，或者 onResolved 抛出异常时
  // 就要将失败的 reason 或者抛出的异常继续往后传递
  // 所以 onRejected 需要指定一个默认值
  // 指定默认的失败的回调 onRejected（向后传递失败的 reason，实现错误/异常传透的关键点）
  // 注意：这里是 throw reason 而不是 return reason
  //      是因为如果 return reason，那么返回的新的 promise 的状态就会变成成功，而不是原来的失败
  onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

  const self = this

  return new Promise((resolve, reject) => {
    /**
     * 调用指定回调函数处理，根据执行的结果改变 return 的 promise 的状态
     * @param {function} callback 指定回调函数
     */
    function handle(callback) {
      if (typeof callback !== 'function') return
      try {
        // result 获取回调函数执行（return）的结果
        const result = callback(self.PromiseResult)
        if (result instanceof Promise) {	// 3. 如果回调函数返回的是 promise
          result.then(resolve, reject)
        } else {													// 2. 如果回调函数返回的不是 promise
          resolve(result)
        }
      } catch (error) {										// 1. 如果抛出异常
        reject(error)
      }
    }

    // 1. 当前状态是 pending 状态，将回调函数保存起来
    if (self.PromiseState === PENDING) {
      self.callbacks.push({
        onResolved(value) {		// 执行成功的回调函数，改 promise 的状态
          handle(onResolved)
        },
        onRejected(reason) {	// 执行失败的回调函数，改 promise 的状态
          handle(onRejected)
        }
      })
    }
    // 2. resolved，【异步】执行 onResolved，并改变 return 的 promise 的状态
    if (self.PromiseState === RESOLVED) {
      setTimeout(() => {
        handle(onResolved)
      }, 0)
    }
    // 3. rejected，【异步】执行 onRejected，并改变 return 的 promise 的状态
    if (self.PromiseState === REJECTED) {
      setTimeout(() => {
        handle(onRejected)
      }, 0)
    }
  })
}
```

## Promise.prototype.catch

```js
/**
 * Promise 原型对象的 catch 方法
 * 指定失败的回调函数
 * @param {function} onRejected 失败的回调函数 (reason) => {}
 * @returns 返回一个新的 promise 对象
 */
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected)
}
```

## Promise.resolve

```js
/**
 * Promise 函数对象的 resolve 方法
 * @param {*} value 成功的值
 * @returns 返回一个成功/失败的 promise
 */
Promise.resolve = function (value) {
  // 返回一个成功/失败的 promise
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {	// value 是 promise：使用 value 的结果作为 promise 的结果
      value.then(resolve, reject)
    } else {		// value 不是 promise：promise 状态变为成功，数据是 value
      resolve(value)
    }
  })
}
```

## Promise.reject

```js
/**
 * Promise 函数对象的 reject 方法
 * @param {*} resaon 失败的原因
 * @returns 返回一个失败的 promise
 */
Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}
```

## Promise.all

```js
/**
 * Promise 函数对象的 all 方法
 * @param {Array<Promise>} promises
 * @returns 返回一个 promise，只有当所有 promise 都成功时才成功，否则只要有一个失败就失败
 */
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let count = 0 // 声明计数变量
    // const values = []; // 保存每个成功的 promise 结果的数组
    const values = new Array(promises.length) // 指定数组长度
    for (let i = 0; i < promises.length; i ++){
      // promises[i].then(value => {
      // 为了防止数组中有不是 promise 的元素，可以将每个元素放到 Promise.resolve 中
      Promise.resolve(promises[i]).then(value => {
        // 得知对象状态是成功
        count ++
        // 将当前 promise 对象成功的结果存入到数组中
        values[i] = value
        if (count === promises.length) {		// 每个 promise 对象都成功
          resolve(values) // 修改返回的 promise 状态
        }
      }, reason => {
        reject(reason)
      })
    }
  })
}
```

## Promise.race

```js
/**
 * Promise 函数对象的 race 方法
 * @param {Array<Promise>} promises 
 * @returns 返回一个 promise，其结果由第一个完成的 promise 决定
 */
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i ++){
      // promises[i].then(value => {
      // 为了防止数组中有不是 promise 的元素，可以将每个元素放到 Promise.resolve 中
      Promise.resolve(promises[i]).then(value => {
        // 修改返回的 promise 对象的状态为成功
        resolve(value)
      }, reason => {
        reject(reason)
      })
    }
  })
}
```

## 自定义函数对象方法：Promise.resolveDelay&Promise.rejectDelay

```js
/**
 * 自定义方法 延时返回一个成功/失败的 promise
 * @param {*} value 成功的数据
 * @param {Number} timeout 延迟时间
 * @returns 一个成功/失败的 promise
 */
Promise.resolveDelay = function (value, timeout) {
  // 延时返回一个成功/失败的 promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof Promise) {
        // value 是 promise，使用 value 的结果作为 promise 的结果
        value.then(resolve,reject)
      } else {
        // value 不是 promise，promise 状态变为成功，数据是 value
        resolve(value)
      }
    })
  }, timeout)
}

/**
 * 自定义方法 延时返回一个失败的 promise
 * @param {*} reason 失败的原因
 * @param {*} timeout 延迟时间
 * @returns 一个失败的 promise
 */
Promise.rejectDelay = function (reason, timeout) {
  // 延时返回一个失败的 promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(reason)
    }, timeout)
  })
}
```

## class 写法

```js
/**
 * 自定义Promise函数模块：IIFE
 */
(function (window) {

  const PENDING = 'pending'
  const RESOLVED = 'fulfilled'
  const REJECTED = 'rejected'

  class Promise {
    /**
     * Promise构造函数
     * @param {function} executor 执行器函数（同步执行）(resolve, reject) => {}
     */
    constructor(executor) {

      const self = this; // 保存当前实例对象的this的值
      // 添加属性
      self.PromiseState = PENDING // 给promise对象指定status属性，初始值为pending
      self.PromiseResult = null // 给promise对象指定一个用于存储结果数据的属性
      self.callbacks = [] // 存的是对象 每个元素的结构：{onResolved() {}, onRejected() {}}

      /**
       * executor内部定义成功时调用的函数
       * @param {*} value 成功的值
       * @returns 
       */
      function resolve(value) {
        // 如果当前状态不是pending，直接结束
        if (self.PromiseState !== PENDING) return
        // 1. 修改对象的状态（promiseState）为 fulfilled
        self.PromiseState = RESOLVED
        // 2. 设置对象结果值（promiseResult）为 value
        self.PromiseResult = value
        // 如果有待执行的callback函数，立即【异步】执行回调函数onResolved
        if (self.callbacks.length > 0) {
          setTimeout(() => { // 放入队列中执行所有成功的回调
            self.callbacks.forEach(callbacksObj => {
              callbacksObj.onResolved(value)
            })
          }, 0)
        }
      }

      /**
       * executor内部定义失败时调用的函数
       * @param {*} reason 失败的原因
       * @returns 
       */
      function reject(reason) {
        // 如果当前状态不是pending，直接结束
        if (self.PromiseState !== PENDING) return
        // 1. 修改对象的状态（promiseState）为 rejected
        self.PromiseState = REJECTED
        // 2. 设置对象结果值（promiseResult）为 reason
        self.PromiseResult = reason
        // 如果有待执行的callback函数，立即【异步】执行回调函数onRejected
        if (self.callbacks.length > 0) {
          setTimeout(() => { // 放入队列中执行所有失败的回调
            self.callbacks.forEach(callbacksObj => {
              callbacksObj.onRejected(reason)
            })
          }, 0)
        }
      }

      // 立即【同步】执行executor函数
      try {
        executor(resolve, reject)
      } catch (error) { // 如果执行器抛出异常，promise对象变成rejected状态
        reject(error)
      }
    }

    /**
     * Promise原型对象then方法 
     * 指定成功和失败的回调函数
     * @param {function} onResolved 成功的回调函数(value) => {}
     * @param {function} onRejected 失败的回调函数(reason) => {}
     * @returns 一个新的promise对象结果由onResolved/onRejected执行的结果决定
     */
    then (onResolved, onRejected) {
      // 指定默认的成功的回调onResolved （向后传递成功的value）
      onResolved = typeof onResolved === 'function' ? onResolved : value => value
      // 指定默认的失败的回调onRejected（向后传递失败的reason 实现错误/异常传透的关键点）
      onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

      const self = this

      return new Promise((resolve, reject) => {
        /**
         * 调用指定回调函数处理，根据执行的结果改变return的promise的状态
         * @param {function} callback 指定回调函数
         */
        function handle(callback) {
          try {
            const result = callback(self.PromiseResult) // result获取回调函数执行(return)的结果
            if (result instanceof Promise) { // 3. 如果回调函数返回的是promise
              result.then(resolve, reject) // 简洁写法
            } else { // 2. 如果回调函数返回的不是promise
              resolve(result)
            }
          } catch (error) { //1. 如果抛出异常
            reject(error)
          }
        }

        if (self.PromiseState === PENDING) { // 1. 当前状态是pending状态，将回调函数保存起来
          self.callbacks.push({
            onResolved(value) { //执行成功的回调函数，改promise的状态
              handle(onResolved)
            },
            onRejected(reason) { //执行失败的回调函数，改promise的状态
              handle(onRejected)
            }
          })
        } else if (self.PromiseState === RESOLVED) { // 2. resolved，【异步】执行onResolved并改变return的promise的状态
          setTimeout(() => {
            handle(onResolved)
          }, 0)
        } else { // 3. rejected，【异步】执行onRejected并改变return的promise的状态
          setTimeout(() => {
            handle(onRejected)
          }, 0)
        }
      })
    }


    /**
     * Promise原型对象catch方法
     * 指定失败的回调函数
     * @param {function} onRejected 失败的回调函数(reason) => {}
     * @returns 一个新的promise对象
     */
    catch (onRejected) {
      return this.then(undefined, onRejected)
    }


    /**
     * Promise函数对象resolve方法
     * @param {*} value 成功的值
     * @returns 一个成功/失败的promise
     */
    static resolve(value) {
      // 返回一个成功/失败的promise
      return new Promise((resolve, reject) => {
        if (value instanceof Promise) { // value是promise => 使用value的结果作为promise的结果
          value.then(resolve,reject)
        } else { // value不是promise => promise状态变为成功，数据是value
          resolve(value)
        }
      })
    }


    /**
     * Promise函数对象reject方法
     * @param {*} resaon 失败的原因
     * @returns 一个失败的promise
     */
    static reject (reason) {
      // 返回一个失败的promise
      return new Promise((resolve, reject) => {
        reject(reason)
      })
    }


    /**
     * Promise函数对象all方法
     * @param {Array<Promise>} promises 
     * @returns 一个promise，只有当所有promise都成功时才成功，否则只要有一个失败就失败
     */
    static all (promises) {
      return new Promise((resolve, reject) => {
        let count = 0 // 声明计数变量
        // const values = []; // 保存每个成功promise结果的数组
        const values = new Array(promises.length) // 指定数组长度
        for (let i = 0; i < promises.length; i++){
          // promises[i].then(value => {
          Promise.resolve(promises[i]).then(value => { // 防止数组中有不是promise的元素
            // 得知对象状态是成功
            count++
            // 将当前promise对象成功的结果存入到数组中
            values[i] = value
            if (count === promises.length) { //每个promise对象都成功
              resolve(values) // 修改函数状态
            }
          }, reason => {
            reject(reason)
          })
        }
      })
    }


    /**
     *Promise函数对象race方法
    * @param {Array<Promise>} promises 
    * @returns 返回 一个promise，其结果由第一个完成的promise决定
    */
    static race (promises) {
      return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++){
          // promises[i].then(value => {
          Promise.resolve(promises[i]).then(value => { // 防止数组中有不是promise的元素
            // 修改返回对象的状态为 成功
            resolve(value)
          }, reason => {
            reject(reason)
          })
        }
      })
    }

    /**
     * 自定义方法 延时返回一个成功/失败的promise
     * @param {*} value 成功的数据
     * @param {Number} timeout 延迟时间
     * @returns 一个成功/失败的promise
     */
    static resolveDelay (value, timeout) {
      // 延时返回一个成功/失败的promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (value instanceof Promise) { // value是promise => 使用value的结果作为promise的结果
            value.then(resolve,reject)
          } else { // value不是promise => promise状态变为成功，数据是value
            resolve(value)
          }
        })
      }, timeout);
    }

    /**
     * 自定义方法 延时返回一个失败的promise
     * @param {*} reason 失败的原因
     * @param {*} timeout 延迟时间
     * @returns 一个失败的promise
     */
    static rejectDelay (reason, timeout) {
      // 延时返回一个失败的promise
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(reason)
        }, timeout)
      })
    }
  }

  // 向外暴露Promise函数
  window.Promise = Promise
})(window)
```
