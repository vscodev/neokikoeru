# API

如无特别说明，Body 参数的编码格式统一为 `application/json` ，涉及鉴权的接口需要在请求头设置 Bearer Token 或在 URL 中传递
`token` 参数。

## 数据类型

### User

| 字段              | 类型      | 说明                               |
|-----------------|---------|----------------------------------|
| id              | string  | 用户 ID                            |
| username        | string  | 用户名                              |
| age_restriction | number  | 年龄限制，1 -> 全年龄、2 -> R-15、3 -> R18 |
| role            | number  | 角色，1 -> 访客、2 -> 普通用户、3 -> 管理员    |
| disabled        | boolean | 帐号是否被禁用，true -> 是、false -> 否     |
| last_login_at   | number  | 最近登录时间                           |
| last_login_ip   | string  | 最近登录 IP                          |
| created_at      | number  | 创建时间                             |
| updated_at      | number  | 更新时间                             |

### Work

| 字段             | 类型            | 说明                               |
|----------------|---------------|----------------------------------|
| id             | string        | 作品 ID                            |
| name           | string        | 作品标题                             |
| image_main     | string        | 封面主图                             |
| image_thumb    | string        | 封面缩略图                            |
| intro          | string        | 作品简介                             |
| maker          | Maker         | 社团                               |
| series         | Series        | 系列                               |
| artists        | Artist[]      | 声优                               |
| illustrators   | Illustrator[] | 画师                               |
| genres         | Genre[]       | 标签                               |
| age_category   | number        | 年龄指定，1 -> 全年龄、2 -> R-15、3 -> R18 |
| price          | number        | 价格，单位 JPY                        |
| sales          | number        | 售出数量                             |
| wishlist_count | number        | 收藏数量                             |
| rating         | number        | 评分                               |
| rating_count   | number        | 评分人数                             |
| review_count   | number        | 赏析数量                             |
| release_date   | string        | 发行日期                             |
| root_folder    | File          | 根文件夹                             |
| created_at     | number        | 创建时间                             |
| updated_at     | number        | 更新时间                             |

### Maker

| 字段   | 类型     | 说明    |
|------|--------|-------|
| id   | string | 社团 ID |
| name | string | 社团名   |

### Series

| 字段   | 类型     | 说明    |
|------|--------|-------|
| id   | string | 系列 ID |
| name | string | 系列名   |

### Artist

| 字段   | 类型     | 说明    |
|------|--------|-------|
| id   | string | 声优 ID |
| name | string | 声优名   |

### Illustrator

| 字段   | 类型     | 说明    |
|------|--------|-------|
| id   | string | 画师 ID |
| name | string | 画师名   |

### Genre

| 字段   | 类型     | 说明    |
|------|--------|-------|
| id   | number | 标签 ID |
| name | string | 标签名   |

### Storage

| 字段     | 类型     | 说明    |
|--------|--------|-------|
| id     | number | 存储 ID |
| driver | string | 驱动    |

支持的驱动列表：

| 名称            | 说明           |
|---------------|--------------|
| local         | 本地存储         |
| aliyun_drive  | 阿里云盘         |
| baidu_netdisk | 百度网盘         |
| onedrive      | OneDrive     |
| google_drive  | Google Drive |
| box           | Box          |
| dropbox       | Dropbox      |
| yandex_disk   | Yandex Disk  |
| pcloud        | pCloud       |
| 115_disk      | 115网盘        |
| 123_drive     | 123云盘        |
| webdav        | WebDAV       |

### File

| 字段         | 类型      | 说明                         |
|------------|---------|----------------------------|
| id         | string  | 文件 ID                      |
| name       | string  | 文件名                        |
| size       | number  | 文件大小                       |
| duration   | number  | 文件时长                       |
| is_folder  | boolean | 是否为目录，true -> 是、false -> 否 |
| parent_id  | string  | 父目录文件 ID                   |
| storage    | Storage | 文件所属存储信息                   |
| created_at | number  | 创建时间                       |
| updated_at | number  | 更新时间                       |

### Pagination

| 字段          | 类型     | 说明  |
|-------------|--------|-----|
| page        | number | 当前页 |
| page_size   | number | 页大小 |
| total_page  | number | 总页数 |
| total_count | number | 总列数 |

## 登录

API：POST 域名 + `/api/v1/auth/login`

### Body 参数

| 字段       | 类型     | 必填 | 说明  |
|----------|--------|----|-----|
| username | string | 是  | 用户名 |
| password | string | 是  | 密码  |

### 返回数据

| 字段    | 类型     | 说明   |
|-------|--------|------|
| user  | User   | 用户信息 |
| token | string | 令牌   |

## 获取作品列表

API：GET 域名 + `/api/v1/works`

### 查询参数

| 字段                  | 类型       | 必填 | 说明                                 |
|---------------------|----------|----|------------------------------------|
| q                   | string   | 否  | 关键词                                |
| with_files          | boolean  | 否  | 是否启用文件搜，true -> 是、false -> 否       |
| maker_id            | string   | 否  | 社团指定                               |
| maker_ids_not       | string[] | 否  | 社团排除                               |
| series_id           | string   | 否  | 系列指定                               |
| series_ids_not      | string[] | 否  | 系列排除                               |
| artist_ids          | string[] | 否  | 声优指定                               |
| artist_ids_not      | string[] | 否  | 声优排除                               |
| illustrator_ids     | string[] | 否  | 画师指定                               |
| illustrator_ids_not | string[] | 否  | 画师排除                               |
| genre_ids           | number[] | 否  | 标签指定                               |
| genre_ids_not       | number[] | 否  | 标签排除                               |
| age_categories      | number[] | 否  | 年龄指定                               |
| min_price           | number   | 否  | 价格不低于                              |
| max_price           | number   | 否  | 价格不高于                              |
| min_sales           | number   | 否  | 售出数量不低于                            |
| min_wishlist_count  | number   | 否  | 收藏数量不低于                            |
| min_rating          | number   | 否  | 评分不低于                              |
| min_rating_count    | number   | 否  | 评分数量不低于                            |
| min_review_count    | number   | 否  | 赏析数量不低于                            |
| year                | number   | 否  | 发行年份                               |
| from                | string   | 否  | 贩卖日开始于                             |
| to                  | string   | 否  | 贩卖日结束于                             |
| performance_type    | string   | 否  | 表演形式，solo -> 一人独演、ensemble -> 多人共演 |
| liked               | boolean  | 否  | 是否已收藏，true -> 是、false -> 否         |
| order               | string   | 否  | 排序属性                               |
| sort                | string   | 否  | 排序规则，asc -> 正序、desc -> 倒序          |
| page                | number   | 否  | 页                                  |
| page_size           | number   | 否  | 页大小                                |

### 返回数据

| 字段         | 类型         | 说明   |
|------------|------------|------|
| data       | Work[]     | 作品列表 |
| pagination | Pagination | 分页信息 |

## 获取作品详情

API：GET 域名 + `/api/v1/work/:id`

### 路径参数

| 字段 | 类型     | 必填 | 说明    |
|----|--------|----|-------|
| id | string | 是  | 作品 ID |

### 返回数据

| 字段 | 类型   | 说明   |
|----|------|------|
|    | Work | 作品信息 |

## 下载封面

API：GET 域名 + `/api/v1/covers/:path`

### 路径参数

| 字段   | 类型     | 必填 | 说明   |
|------|--------|----|------|
| path | string | 是  | 封面路径 |

## 获取文件列表

API：POST 域名 + `/api/v1/fs/list`

### Body 参数

| 字段        | 类型      | 必填 | 说明                             |
|-----------|---------|----|--------------------------------|
| folder_id | string  | 是  | 文件夹 ID                         |
| refresh   | boolean | 否  | 是否刷新并重建索引，true -> 是、false -> 否 |

### 返回数据

| 字段 | 类型     | 说明   |
|----|--------|------|
|    | File[] | 文件列表 |

## 下载文件

API：GET 域名 + `/api/v1/fs/download`

### 查询参数

| 字段      | 类型     | 必填 | 说明    |
|---------|--------|----|-------|
| file_id | string | 是  | 文件 ID |
