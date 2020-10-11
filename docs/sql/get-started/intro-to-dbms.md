---
title: Intro to DBMS
---

## Connector

https://dev.mysql.com/downloads/

<Img w="300" src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/mysql-connector.png' alt='mysql-connector'/>

## Terms

在我们开始学习 MySQL 数据库前，让我们先了解下 RDBMS 的一些术语：

- **数据库**: 数据库是一些关联表的集合。
- **数据表**: 表是数据的矩阵。在一个数据库中的表看起来像一个简单的电子表格。
- **列**: 一列(数据元素) 包含了相同类型的数据, 例如邮政编码的数据。
- **行**: 一行（=元组，或记录）是一组相关的数据，例如一条用户订阅的数据。
- **冗余**: 存储两倍数据，冗余降低了性能，但提高了数据的安全性。
- **主键**: 主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。
- **外键**: 外键用于关联两个表。
- **复合键**: 复合键（组合键）将多个列作为一个索引键，一般用于复合索引。
- **索引**: 使用索引可快速访问数据库表中的特定信息。索引是对数据库表中一列或多列的值进行排序的一种结构。类似于书籍的目录。
- **参照完整性**: 参照的完整性要求关系中不允许引用不存在的实体。与实体完整性是关系模型必须满足的完整性约束条件，目的是保证数据的一致性。

MySQL 为关系型数据库(Relational Database Management System), 这种所谓的"关系型"可以理解为"表格"的概念, 一个关系型数据库由一个或数个表格组成, 如图所示的一个表格:

<Img src='https://cosmos-x.oss-cn-hangzhou.aliyuncs.com/Sq3bY6.jpg' alt='Sq3bY6'/>

- 表头(header): 每一列的名称;
- 列(col): 具有相同数据类型的数据的集合;
- 行(row): 每一行用来描述某条记录的具体信息;
- 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
- 键(key): 键的值在当前列中具有唯一性。

## Reference

1. [MySQL 教程](https://www.runoob.com/mysql/mysql-tutorial.html)
