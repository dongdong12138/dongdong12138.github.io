# TypeScript

## 类型声明

```ts
let a: string;    // 变量 a 只能存储字符串
let b: number;    // 变量 b 只能存储数值
let c: boolean;   // 变量 c 只能存储布尔值

a = 'hello';
a = 100;    // 警告：不能将类型“number”分配给类型“string”

b = 666;
b = '你好'; // 警告：不能将类型“string”分配给类型“number”

c = true;
c = 666;    // 警告：不能将类型“number”分配给类型“boolean”

// 参数 x、y 必须是数字，函数返回值也必须是数字
function demo(x: number, y: number): number {
  return x + y;
}
demo(100, 200);
demo(100, '200');     // 警告：不能将类型“string”分配给类型“number”
demo(100, 200, 300);  // 警告：应有 2 个参数，但获得 3 个
demo(100);            // 警告：应有 2 个参数，但获得 1 个
```

## 类型推断

```ts
let d = -99;  // TypeScript 会推断出变量 d 的类型是数字
d = false;    // 警告：不能将类型“boolean”分配给类型“number”
```

## 类型总览

JavaScript 中的数据类型：string、number、boolean、undefined、null、bigint、symbol、object。

TypeScript 中的数据类型：
- JavaScript 中的数据类型
- 新增类型：any、unknown、void、never、enum、tuple
- ⾃定义类型：type、interface

注意，JS 中的三个构造函数：String、Number、Boolean，他们只⽤于包装对象，开发时很少去使⽤他们，在 TS 中也是同理。

| 类型      | 描述              | 举例                       |
|---------|-----------------|--------------------------|
| string  | 字符串             | `'hello'`、`'ok'`、`'你好'`  |
| number  | 数值              | `1`、`-33`、`2.5`          |
| boolean | 布尔值             | `true`、`false`           |
| 字面量     | 字面量值            | 值本身                      |
| any     | 任意类型            | `1`、`'hello'`、`true`、... |
| unknown | 类型安全的 any       | `1`、`'hello'`、`true`、... |
| never   | 不能是任何值          | 无值                       |
| void    | 空 或 `undefined` | 空 或 `undefined`          |
| object  | 任意的 JS 对象       | `{name: '张三'}`           |
| tuple   | 元组，固定长度的数组      | `[4, 5]`                 |
| enum    | 枚举              | `enum{A, B}`             |

## 常用类型

### 字面量

```ts
let a: '你好';  // a 的值只能为字符串“你好”
let b: 100;     // b 的值只能为数字 100
a = '欢迎';     // 警告：不能将类型“"欢迎"”分配给类型“"你好"”
b = 200;        // 警告：不能将类型“200”分配给类型“100”

let gender: '男' | '⼥';  // 定义⼀个 gender 变量，值只能为字符串“男”或“⼥”
gender = '男';
gender = '未知';  // 不能将类型“"未知"”分配给类型“"男" | "⼥"”
```

### any

`any` 表示任意类型，相当于关闭了对该变量的类型检查。

```ts
let a: any;   // 显式声明为 any
a = 100;
a = '你好';
a = false;

let b;        // 隐式声明为 any
b = 100;
b = '你好';
b = false;
```

注意，`any` 类型的变量，可以赋值给任意类型的变量。

```ts
let a;
let x: string;

x = a;  // ⽆警告
```

### unknown

`unknown` 表示未知类型，可以理解为⼀个类型安全的 `any`。

`unknown` 适⽤于一开始不知道数据的类型，后期才能确定数据的类型。

```ts
let a: unknown;

// 以下对 a 的赋值，均正常
a = 100;
a = false;
a = '你好';

let x: string;
x = a;  // 警告：不能将类型“unknown”分配给类型“string”
```

若就是想把 `a` 赋值给 `x`，可以⽤以下三种写法：

```ts
let x: string;
let a: unknown;
a = 'hello';

// 第⼀种⽅式：加类型判断
if (typeof a === 'string') {
  x = a;
}

// 第⼆种⽅式：加断⾔
x = a as string;

// 第三种⽅式：加断⾔
x = <string>a;
```

`any` 后点任何的东⻄都不会报错，⽽ `unknown` 正好与之相反。

```ts
let str1: string = 'hello';
str1.toUpperCase(); // ⽆警告

let str2: any = 'hello';
str2.toUpperCase(); // ⽆警告

let str3: unknown = 'hello';
str3.toUpperCase();  // 警告：“str3”的类型为“未知”

// 使⽤断⾔强制指定 str3 的类型为 string
(str3 as string).toUpperCase(); // ⽆警告
```

### never

`never` 表示任何值都不是，简⾔之就是不能有值，`undefined`、`null`、`''`、`0` 都不行。

1. ⼏乎不⽤ `never` 去直接限制变量，因为没有意义，例如：

    ```ts
    let a: never;
    
    // 以下对 a 的所有赋值都会有警告
    a = 1;
    a = true;
    a = undefined;
    a = null;
    ```

2. `never` ⼀般是 TypeScript 主动推断出来的，例如：

    ```ts
    let a: string;
    a = 'hello';
    
    if (typeof a === 'string') {
      a.toUpperCase();
    } else {
      console.log(a); // TypeScript 会推断出此处 a 是 never，因为没有任何⼀个值符合此处的逻辑
    }
    ```

3. `never` 也可⽤于限制函数的返回值

   ```ts
   // 限制 demo 函数不需要有任何返回值，任何值都不⾏，返回 undeifned、null 都不⾏
   function demo(): never {
     throw new Error('程序异常退出');
   }
   ```

### void

`void` 常⽤于限制函数的返回值。

```ts
// ⽆警告
function demo1(): void {
}

// ⽆警告
function demo2(): void {
  return;
}

// ⽆警告
function demo3(): void {
  return undefined;
}

// 有警告：不能将类型“number”分配给类型“void”
function demo4(): void {
  return 666;
}
```

### object

关于 `Object` 与 `object`，直接说结论：在类型限制时，`Object` ⼏乎不⽤，因为范围太⼤了，⽆意义。

1. `object` 的含义：任何【⾮原始值类型】，包括：对象、函数、数组等，限制的范围⽐较宽泛，⽤的少。

    ```ts
    let a: object;
    
    // 以下代码，是将【⾮原始类型】赋给 a，所以均⽆警告
    a = {};
    a = { name: '张三' };
    a = [1, 3, 5, 7, 9];
    a = function () {};
    
    // 以下代码，是将【原始类型】赋给 a，有警告
    a = null;
    a = undefined;
    a = 1;
    a = true;
    a = '你好';
    ```

2. `Object` 的含义：`Object` 的实例对象，限制的范围太⼤了，⼏乎不⽤。

    ```ts
    let a: Object;  // a 的值必须是 Object 的实例对象
    
    // 以下代码，均⽆警告，因为给 a 赋的值，都是 Object 的实例对象
    a = {};
    a = { name: '张三' };
    a = [1, 3, 5, 7, 9];
    a = function () {};
    
    // 以下代码，也均⽆警告
    a = 1;  // 1 不是 Object 的实例对象，但其包装对象是 Object 的实例，以下同理
    a = true;
    a = '你好';
    
    // 以下代码均有警告
    a = null;       // 警告：不能将类型“null”分配给类型“Object”
    a = undefined;  // 警告：不能将类型“undefined”分配给类型“Object”
    ```

3. 实际开发中，限制⼀般对象，通常使⽤以下形式。

    ```ts
    // 限制 person 对象的具体内容，使⽤ , 分隔，问号代表可选属性
    let person: { name: string, age?: number };
    
    // 限制 car 对象的具体内容，使⽤ ; 分隔，必须有 price 和 color 属性，其他属性不去限制，有没有都⾏
    let car: { price: number; color: string; [k: string]: any };
    
    // 限制 student 对象的具体内容，使⽤ 回⻋ 分隔
    let student: {
      id: string
      grade: number
    };
    
    // 以下代码均⽆警告
    person = { name: '张三', age: 18 };
    person = { name: '李四' };
    car = { price: 100, color: '红⾊' };
    student = { id: 'tetqw76te01', grade: 3 };
    ```

4. 限制函数的参数、返回值，使⽤以下形式：

    ```ts
    let demo: (a: number, b: number) => number;
    
    demo = function (x, y) {
      return x + y;
    };
    ```

5. 限制数组，使⽤以下形式

    ```ts
    let arr1: string[];   // 等价于：let arr1: Array<string>;
    let arr2: number[];   // 等价于：let arr2: Array<number>;
    arr1 = ['a', 'b', 'c'];
    arr2 = [1, 3, 5, 7, 9];
    ```

### tuple

`tuple` 表示元组，就是⼀个⻓度固定的数组。

```ts
let t: [string, number];
t = ['hello', 123];

// 警告，不能将类型“[string, number, boolean]”分配给类型“[string, number]”
t = ['hello', 123, false];
```

### enum

`enum` 表示枚举。

```ts
// 定义⼀个枚举
enum Color {
  Red,
  Blue,
  Black,
  Gold
}
console.log(Color);
/*
{
  0: 'Red',
  1: 'Blue',
  2: 'Black',
  3: 'Gold',
  Red: 0,
  Blue: 1,
  Black: 2,
  Gold: 3
}
*/

// 定义⼀个枚举，并指定其初始值
enum Color2 {
  Red = 6,
  Blue,
  Black,
  Gold
}
console.log(Color2);
/*
{
  6: 'Red',
  7: 'Blue',
  8: 'Black',
  9: 'Gold',
  Red: 6,
  Blue: 7,
  Black: 8,
  Gold: 9
}
*/

// 定义⼀个 phone 变量
let phone: { name: string, price: number, color: Color };
phone = { name: '华为Mate60', price: 6500, color: Color.Red };
phone = { name: 'iPhone15Pro', price: 7999, color: Color.Blue };
if (phone.color === Color.Red) {
  console.log('⼿机是红⾊的');
}
```

## ⾃定义类型

⾃定义类型，可以更灵活的限制类型。

```ts
// 性别的枚举
enum Gender {
   Male,
   Female
}

// ⾃定义⼀个年级类型（⾼⼀、⾼⼆、⾼三）
type Grade = 1 | 2 | 3

// ⾃定义⼀个学⽣类型
type Student = {
   name: string,
   age: number,
   gender: Gender,
   grade: Grade
}

// 定义两个学⽣变量：s1、s2
let s1: Student;
let s2: Student;
s1 = { name: '张三', age: 18, gender: Gender.Male, grade: 1 };
s2 = { name: '李四', age: 18, gender: Gender.Female, grade: 2 };
```

## 抽象类

```ts title="常规类"
class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }
}

const p1 = new Person('张三', 18);
const p2 = new Person('李四', 19);
console.log(p1);
console.log(p2);
```

```ts title="继承"
// Person 类
class Person {}

// Teacher 类继承 Person
class Teacher extends Person {}

// Student 类继承 Person
class Student extends Person {}

// Person 实例
const p1 = new Person('周杰伦', 38);

// Student 实例
const s1 = new Student('张同学', 18);
const s2 = new Student('李同学', 20);

// Teacher 实例
const t1 = new Teacher('刘⽼师', 40);
const t2 = new Teacher('孙⽼师', 50);
```

```ts title="抽象类：不能去实例化，但可以被别⼈继承，抽象类⾥有抽象⽅法"
// Person（抽象类）
abstract class Person {}

// Teacher 类继承 Person
class Teacher extends Person {
   // 构造器
   constructor(name: string, age: number) {
      super(name, age);
   }
   // ⽅法
   speak() {
      console.log('你好！我是⽼师:', this.name);
   }
}

// Student 类继承 Person
class Student extends Person {}

// Person 实例
// const p1 = new Person('周杰伦', 38); // 由于 Person 是抽象类，所以此处不可以 new Person 的实例对象
```

## 接口

1. 接⼝⽤于限制⼀个类中包含哪些属性和⽅法。

   ```ts
   // Person 接⼝
   interface Person {
     // 属性声明
     name: string;
     age: number;
   
     // ⽅法声明
     speak(): void;
   }
   
   // Teacher 实现 Person 接⼝
   class Teacher implements Person {
     name: string;
     age: number;
   
     // 构造器
     constructor(name: string, age: number) {
       this.name = name;
       this.age = age;
     }
   
     // ⽅法
     speak() {
       console.log('你好！我是⽼师:', this.name);
     }
   }
   ```

2. 接⼝是可以重复声明的。

   ```ts
   // Person 接⼝
   interface PersonInter {
      // 属性声明
      name: string;
      age: number;
   }
   
   // Person 接⼝
   interface PersonInter {
      // ⽅法声明
      speak(): void;
   }
   
   // Person 类实现 PersonInter
   class Person implements PersonInter {
      name: string;
      age: number;
   
      // 构造器
      constructor(name: string, age: number) {
         this.name = name;
         this.age = age;
      }
   
      // ⽅法
      speak() {
         console.log('你好！我是⽼师:', this.name);
      }
   }
   ```

3. 【接⼝】与【⾃定义类型】的区别：
   - 接口可以当自定义类型去使用，可以限制类的结构
   - 自定义类型仅仅就是自定义类型

   ```ts
   // Person 接⼝
   interface Person {
      name: string;
      age: number;
      speak(): void;
   }
   
   // Person 类型
   // type Person = {
   //    name: string
   //    age: number
   //    speak(): void
   // }
   
   // 接⼝当成⾃定义类型去使⽤
   let person: Person = {
      name: '张三',
      age: 18,
      speak() {
         console.log('你好！');
      }
   };
   ```

4. 【接⼝】与【抽象类】的区别：
   - 抽象类可以有普通方法，也可以有抽象方法，使用 `extends` 去继承抽象类
   - 接口只能有抽象方法，使用 `implements` 去实现接口

   ```ts title="抽象类举例"
   // 抽象类 —— Person
   abstract class Person {
      // 属性
      name: string;
      age: number;
   
      // 构造器
      constructor(name: string, age: number) {
         this.name = name;
         this.age = age;
      }
   
      // 抽象⽅法
      abstract speak(): void
   
      // 普通⽅法
      walk() {
         console.log('我在⾏⾛中....');
      }
   }
   
   // Teacher 类继承抽象类 Person
   class Teacher extends Person {
      constructor(name: string, age: number) {
         super(name, age);
      }
      speak() {
         console.log(`我是⽼师，我的名字是${this.name}`);
      }
   }
   ```

   ```ts title="接口举例"
   // 接⼝ —— Person，只能包含抽象⽅法
   interface Person {
      // 属性，不写具体值
      name: string;
      age: number;
   
      // ⽅法，不写具体实现
      speak(): void;
   }
   
   // 创建 Teacher 类实现 Person 接⼝
   class Teacher implements Person {
      name: string;
      age: number;
      constructor(name: string, age: number) {
         this.name = name;
         this.age = age;
      }
      speak() {
         console.log('我在⻜快的⾏⾛中......');
      }
   }
   ```

## 属性修饰符

| 修饰符       | 含义   | 描述            |
|-----------|------|---------------|
| readonly  | 只读属性 | 属性无法修改        |
| public    | 公开的  | 可以在类、子类和对象中修改 |
| protected | 受保护的 | 可以在类、子类中修改    |
| private   | 私有的  | 可以在类中修改       |

## 泛型

定义⼀个函数或类时，有些情况下⽆法确定其中要使⽤的具体类型（返回值、参数、属性的类型不能确定），此时就需要泛型了。

举例：`<T>` 就是泛型，（不⼀定⾮叫 `T`），设置泛型后即可在函数中使⽤ `T` 来表示该类型。

```ts
function test<T>(arg: T): T {
   return arg;
}

// 不指名类型，TS 会⾃动推断出来
test(10);
// 指名具体的类型
test<number>(10);
```

泛型可以写多个：

```ts
function test<T, K>(a: T, b: K): K {
   return b;
}

// 为多个泛型指定具体⾃值
test<number, string>(10, 'hello');
```

类中同样可以使⽤泛型：

```ts
class MyClass<T> {
   prop: T;
   constructor(prop: T) {
      this.prop = prop;
   }
}
```

也可以对泛型的范围进⾏约束：

```ts
interface Demo {
   length: number;
}

// 泛型 T 必须是 MyInter 的⼦类，即：必须拥有 length 属性
function test<T extends Demo>(arg: T): number {
   return arg.length;
}

test(10); // 类型“number”的参数不能赋给类型“Demo”的参数
test({ name: '张三' }); // 类型“{ name: string; }”的参数不能赋给类型“Demo”的参数
test('123');
test({ name: '张三', length: 10 });
```
