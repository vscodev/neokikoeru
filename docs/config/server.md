# 服务器配置

对应配置文件的 `server` 项。

| 字段                   | 类型     | 默认值     | 说明                                                                                         |
|------------------------|----------|------------|----------------------------------------------------------------------------------------------|
| `host`                 | string   | `0.0.0.0`  | 监听地址。`0.0.0.0` 允许局域网/外部访问，`127.0.0.1` 仅本机访问。                            |
| `port`                 | number   | `5233`     | 监听端口。                                                                                   |
| `tls.enabled`          | bool     | `false`    | 是否启用 HTTPS。                                                                             |
| `tls.cert_file`        | string   | `""`       | 证书文件路径（PEM），启用 TLS 时必填。                                                       |
| `tls.key_file`         | string   | `""`       | 私钥文件路径（PEM），启用 TLS 时必填。                                                       |
| `cors.enabled`         | bool     | `true`     | 是否启用跨域支持。                                                                           |
| `cors.allowed_origins` | string[] | `["*"]`    | 允许跨域访问的来源列表，如 `["https://example.com"]`。`*` 表示允许所有来源。                 |
| `ip_extractor`         | string   | `"direct"` | 客户端真实 IP 的获取方式，见下表。                                                           |
| `trusted_proxies`      | string[] | `[]`       | 可信代理列表（CIDR 或 IP），仅当 `ip_extractor` 为 `xff` 或 `real_ip` 时生效。               |

ip_extractor 取值：

| 值        | 说明                                                                                    |
|-----------|-----------------------------------------------------------------------------------------|
| `direct`  | 直接使用 TCP 连接的来源 IP。直连部署（无反向代理）时使用。                              |
| `xff`     | 从 `X-Forwarded-For` 请求头解析真实 IP。部署在 Nginx、Cloudflare 等反向代理之后时使用。 |
| `real_ip` | 从 `X-Real-IP` 请求头解析真实 IP。适合 Nginx 默认转发配置。                             |
