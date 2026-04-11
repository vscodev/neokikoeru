# 配置文件

Neokikoeru 的数据目录包含程序配置、应用数据、授权许可证以及日志等内容，根据你使用的平台和安装方式，位置可能有所不同。

| 系统      | 路径                                                                                 |
|---------|------------------------------------------------------------------------------------|
| Windows | `%AppData%/neokikoeru`                                                             |
| macOS   | `$HOME/Library/Application Support/neokikoeru`                                     |
| Linux   | `$XDG_CONFIG_HOME/neokikoeru` 或 `$HOME/.config/neokikoeru` 或 `/var/lib/neokikoeru` |

数据目录下的 `config.json` 为Neokikoeru的运行配置文件，示例：

::: code-group

```json [config.json]
{
  "log": {
    "enabled": true,
    "filename": "$HOME/Library/Application Support/neokikoeru/logs/neokikoeru.log",
    "max_size": 50,
    "max_backups": 30,
    "max_age": 28,
    "compress": true
  },
  "database": {
    "driver": "sqlite3",
    "data_source": "file:$HOME/Library/Application Support/neokikoeru/neokikoeru.db?cache=shared&mode=rwc&_busy_timeout=500&_txlock=immediate&_journal_mode=WAL&_foreign_keys=true"
  },
  "server": {
    "bind_host": "0.0.0.0",
    "bind_port": 5233,
    "allow_origins": [
      "*"
    ],
    "allow_methods": [
      "*"
    ],
    "allow_headers": [
      "*"
    ],
    "jwt_secret": "xxxxxx",
    "token_expires_in": 30
  },
  "dlsite": {
    "locale": "zh-CN",
    "images_dir": "$HOME/Library/Application Support/neokikoeru/images",
    "trim_outer_brackets": true,
    "proxy_url": "",
    "proxy_secret": ""
  }
}
```

:::

> [!NOTE]
> 配置文件的绝大部分内容都不需要修改，除非你明确知道自己在做什么。修改后需要重启程序才会生效。
