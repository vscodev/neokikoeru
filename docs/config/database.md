# 数据库配置

对应配置文件的 `database` 项。

```json
{
  "driver": "sqlite3",
  "data_source": "file:$HOME/Library/Application Support/neokikoeru/neokikoeru.db?cache=shared&mode=rwc&_busy_timeout=500&_txlock=immediate&_journal_mode=WAL&_foreign_keys=true"
}
```

Neokikoeru 默认使用 [SQLite](https://github.com/mattn/go-sqlite3) 数据库，你可以根据需要切换成 [MySQL](https://github.com/go-sql-driver/MYSQL) 或者 [PostgreSQL](https://github.com/lib/pq)。

## 使用 MySQL

示例：

```json
{
  "driver": "mysql",
  "data_source": "username:password@tcp(localhost:3306)/neokikoeru?charset=utf8mb4&parseTime=true&loc=Local"
}
```

## 使用 PostgreSQL

示例：

```json
{
  "driver": "postgres",
  "data_source": "postgres://username:password@localhost:5432/neokikoeru?sslmode=disable&timezone=Asia/Shanghai"
}
```
