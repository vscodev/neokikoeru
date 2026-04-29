# WebDAV

你可以将 Neokikoeru 映射成 WebDAV 服务器，支持通过第三方 WebDAV 客户端访问你的媒体库。

> [!TIP]
> 使用此功能需要激活 [Neokikoeru 许可证](/license)，否则服务端将拒绝连接。

## 连接配置

| Name | Value                       |
|------|-----------------------------|
| URL  | http[s]\://domain:port/dav/ |
| 主机   | domain                      |
| 路径   | dav                         |
| 协议   | http/https                  |
| 端口   | 与网页端一致                      |
| 用户名  | 与网页端用户名一致                   |
| 密码   | 与网页端密码一致                    |

## 使用说明

得益于[文件索引](/guide/usage-tips#文件索引)机制，Neokikoeru 的 WebDAV 服务比 AList 之类的工具减少了大量网络请求，因此要高效得多。

除了管理音声作品外，你还可以通过[网易爆米花](https://bmh.163.com)等软件连接 Neokikoeru 的 WebDAV 服务器来打造私人影视库，只需要将影片资源放到某个音声作品目录下。

> [!NOTE]
> Neokikoeru 的 WebDAV 服务是只读的，仅支持 `OPTIONS`、`PROPFIND`、`GET`、`HEAD` 这四种方法，意味着你无法执行修改、上传文件等操作。
