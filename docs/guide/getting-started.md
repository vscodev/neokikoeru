# 快速开始

## 下载安装

Neokikoeru 使用 Go 语言开发，支持跨平台，只需前往 [Releases](https://github.com/vscodev/neokikoeru/releases) 页面下载适用于你平台的二进制文件即可执行，无需额外依赖。此外，你还可以使用包管理器：

### [Homebrew](https://brew.sh)

```sh
$ brew install vscodev/tap/neokikoeru
```

### [Scoop](https://scoop.sh)

```sh
$ scoop bucket add vscodev https://github.com/vscodev/scoop-bucket.git
$ scoop install vscodev/neokikoeru
```

## 开始使用

启动 Neokikoeru 服务：

```sh
$ neokikoeru serve
```

> [!TIP]
> Windows 系统可直接双击 `neokikoeru.exe` 运行。

程序默认监听 `5233` 端口，启动服务后通过浏览器访问 `http://localhost:5233` 即可。如果一切正常，你将会看到如下图所示的页面。

![login](/images/login.webp)

首次运行程序会自动创建管理员帐号，请留意控制台输出的日志。

```
successfully created admin account, the username is [admin] and password is [xxxxxx]
```

初次登录系统你会发现媒体库啥也没有，你需要[添加存储](/guide/storages)自行导入。

> [!TIP]
> 如果你忘记了管理员密码，可运行 `neokikoeru admin reset-pwd` 命令重置。

## Windows 服务

你可以将 Neokikoeru 注册为 Windows 服务，这样命令行窗口不用常驻，并支持开机自启。

以管理员身份打开终端，切换到 Neokikoeru 程序所在目录，如下图所示。

![windows-service](/images/windows-service.webp)

### 注册服务

```sh
$ .\neokikoeru.exe service install
```

### 启动服务

```sh
$ .\neokikoeru.exe service start
```

### 停止服务

```sh
$ .\neokikoeru.exe service stop
```

### 卸载服务

```sh
$ .\neokikoeru.exe service uninstall
```

> [!TIP]
> 由于程序作为服务运行后控制台将不再输出日志，建议先前台运行 Neokikoeru 一次初始化管理员帐号再将其注册为服务。

## Docker 部署

创建一个工作目录，例如 `neokikoeru` 。

```sh
$ mkdir neokikoeru
$ cd neokikoeru
```

新建 `docker-compose.yml` 文件并填入以下内容：

```yaml
name: neokikoeru

services:
  server:
    image: vscodev/neokikoeru:latest
    ports:
      - "5233:5233"
    volumes:
      - "./data/:/var/lib/neokikoeru/"
      - /etc/machine-id:/etc/machine-id:ro
      - /var/lib/dbus/machine-id:/var/lib/dbus/machine-id:ro
    environment:
      - TZ=Asia/Shanghai
      - PUID=0
      - PGID=0
      - UMASK=022
    restart: unless-stopped
```

然后运行：

```sh
$ docker compose up -d
```

## 反向代理

在 Nginx 网站配置文件的 `server` 块中添加

```
location / {
    proxy_pass http://127.0.0.1:5233;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Port $server_port;
}
```
