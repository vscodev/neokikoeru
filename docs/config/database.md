# 数据库配置

对应配置文件的 `database` 项。

| 键                  | 类型   | 默认值          | 说明                                                                                |
|---------------------|--------|-----------------|-------------------------------------------------------------------------------------|
| `driver`            | string | `"sqlite3"`     | 数据库驱动，支持 `sqlite3`、`mysql`、`postgres`。                                   |
| `data_source`       | string | SQLite 文件 DSN | 数据源连接串，格式随驱动而异，见下。                                                |
| `max_open_conns`    | int    | `4`             | 最大打开连接数。`<= 0` 时按驱动自动取值。                                           |
| `max_idle_conns`    | int    | `4`             | 最大空闲连接数。`<= 0` 时按驱动自动取值；若大于 `max_open_conns` 会被自动压到相等。 |
| `conn_max_lifetime` | int    | `0`             | 连接最长存活时间，**单位秒**。`<= 0` 时按驱动自动取值。                             |

`max_open_conns` / `max_idle_conns` / `conn_max_lifetime` 传 `0` 时的自动取值：

| driver     | 最大打开           | 最大空闲 | 连接存活 |
|------------|--------------------|----------|----------|
| `sqlite3`  | `max(4, CPU 核数)` | 同左     | 不限     |
| `mysql`    | `10`               | `10`     | 3 分钟   |
| `postgres` | `10`               | `10`     | 30 分钟  |

## SQLite（默认，零依赖）

```
file:<数据目录>/neokikoeru.db?mode=rwc&_busy_timeout=5000&_txlock=immediate&_journal_mode=WAL&_foreign_keys=true
```

各参数含义：

- `mode=rwc`：文件不存在时创建
- `_busy_timeout=5000`：锁等待 5 秒
- `_txlock=immediate`：事务开始即取写锁，避免升级锁时死锁
- `_journal_mode=WAL`：WAL 模式，读写并发更好
- `_foreign_keys=true`：启用外键约束

**请勿把 SQLite 数据库放在网络文件系统（NFS / SMB / 群晖 WebDAV 挂载）上**，WAL
依赖可靠的共享内存与文件锁，放网络盘极易损坏数据库。媒体文件可以放网络盘，数据库必须放本地磁盘。

## MySQL

示例：

```json
{
  "driver": "mysql",
  "data_source": "user:password@tcp(127.0.0.1:3306)/neokikoeru?charset=utf8mb4&parseTime=true&loc=Local"
}
```

## PostgreSQL

示例：

```json
{
  "driver": "postgres",
  "data_source": "host=127.0.0.1 port=5432 user=neokikoeru password=xxx dbname=neokikoeru sslmode=disable"
}
```

## 注意事项

- 使用 MySQL 或者 PostgreSQL 时， **数据库必须提前创建**，Neokikoeru 只会自动建表、建索引和迁移结构，不会自动建库。
