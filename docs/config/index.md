# 配置文件

Neokikoeru 的配置文件固定为数据目录下的 `config.json`：

```
<数据目录>/config.json
```

### 数据目录如何确定

| 场景             | 数据目录                                    |
|------------------|---------------------------------------------|
| 官方 Docker 镜像 | `/var/lib/neokikoeru`                       |
| 其他平台默认值   | 系统用户配置目录下的 `neokikoeru`           |
| 手动指定         | `neokikoeru serve --data-dir /path/to/data` |

各系统的默认位置：

- Linux：`$XDG_CONFIG_HOME/neokikoeru`，未设置时为 `~/.config/neokikoeru`
- macOS：`~/Library/Application Support/neokikoeru`
- Windows：`%AppData%\neokikoeru`