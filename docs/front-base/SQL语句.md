# SQL 语句

## 增（Insert）

```sql title="插入完整行，指定每个字段的值"
INSERT INTO 表名 (字段1, 字段2, ..., 字段N) VALUES (值1, 值2, ..., 值N);

-- 示例
INSERT INTO Students (StudentID, Name, Gender, BirthDate) VALUES (1, '张三', '男', '1990-01-01');
```

```sql title="如果表中有默认值或自增长列，可以不指定相应字段"
INSERT INTO Students (Name, Gender) VALUES ('李四', '女');
```

## 删（Delete）

```sql title="删除所有匹配记录"
DELETE FROM 表名 WHERE 条件;

-- 示例
DELETE FROM Students WHERE StudentID = 1;
```

```sql title="删除所有记录（谨慎操作）"
DELETE FROM Students;
```

## 改（Update）

```sql
UPDATE 表名 SET 字段1 = 新值1[, 字段2 = 新值2 ...] WHERE 条件;

-- 示例
UPDATE Students SET Name = '王五' WHERE StudentID = 2;
```

## 查（Select）

```sql title="查询所有列"
SELECT * FROM 表名;
```

```sql title="查询指定列"
SELECT 字段1, 字段2, ... FROM 表名;

-- 示例
SELECT Name, BirthDate FROM Students;
```

```sql title="带条件查询"
SELECT * FROM Students WHERE Gender = '女';
```

```sql title="使用 DISTINCT 去除重复行"
SELECT DISTINCT ColumnName FROM Table;
```

```sql title="排序查询"
SELECT * FROM Students ORDER BY Name ASC/DESC;
```

```sql title="结合 LIMIT 限制返回行数"
SELECT * FROM Students LIMIT 10;
```
