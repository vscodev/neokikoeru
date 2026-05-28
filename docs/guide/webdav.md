# WebDAV

你可以将 Neokikoeru 映射成 WebDAV 服务器，支持通过第三方 WebDAV 客户端连接并访问你的媒体库。

> [!TIP]
> 使用此功能需要激活 [Neokikoeru 许可证](/license)，否则服务端将拒绝连接。

## 连接信息

| Name | Value                     |
|------|---------------------------|
| URL  | `http[s]://host:port/dav` |
| 主机   | `host`                    |
| 路径   | `/dav`                    |
| 协议   | `http[s]`                 |
| 端口   | `port`                    |
| 用户名  | 与网页端一致                    |
| 密码   | 与网页端一致                    |

> [!NOTE]
> Neokikoeru 的 WebDAV 服务是只读的，仅支持 `OPTIONS`、`PROPFIND`、`GET`、`HEAD` 这四种方法，意味着你无法执行修改、上传文件等操作。
