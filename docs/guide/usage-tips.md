# 使用技巧

## 文件索引

Neokikoeru 会在你浏览作品文件时自动建立索引，如果文件源有变动，你可以点击如下图所示的同步图标刷新并重建索引。

![fs-list-refresh](/images/fs-list-refresh.webp)

> [!TIP]
> 你可以一次性为某个存储的所有作品文件建立索引，功能入口：存储 -> 更多 -> 索引。

> [!CAUTION]
> 如果存储驱动为网盘，立即索引会频繁调用上游 API 从而可能触发风控（特别是国内网盘服务），请谨慎使用。

## 搜索作品

Neokikoeru 支持非常强大的个性化搜索功能，能够帮助你快速定位到到相关作品。

### 多关键词搜索

以空格分隔多个关键词，取其搜索结果的交集，排除某个关键词可添加 `-` 前缀。示例：

- `浅見ゆい 治愈`

  搜索同时包含 `浅見ゆい` 和 `治愈` 的作品。

- `浅見ゆい -萝莉`

  搜索包含 `浅見ゆい` 但不包含 `萝莉` 的作品。

> [!TIP]
> 如果关键词本身包含空格，你需要使用引号包裹，如 `"Ear Cleaning"` 。

### 渐进式搜索

当搜索结果过多时，你可以通过鼠标右键菜单（移动设备长按）基于当前内容进一步筛选过滤。

![works-filter](/images/works-filter.webp)

### 高级筛选

如果需要更细粒度的搜索，你可以通过网页右侧的悬浮球唤出「高级筛选」菜单。

![works-advanced-filter](/images/works-advanced-filter.webp)

### 文件搜

建立[文件索引](#文件索引)后可使用文件搜功能，支持查找某些 Track 名称包含特定关键词的作品。

> [!NOTE]
> 开启文件搜索可能会影响性能，默认处于关闭状态，可双击导航栏搜索框的放大镜图标启用，如下图所示。

![works-file-search](/images/works-file-search.webp)

### 搜索不存在的作品

如果作品尚未入库，Neokikoeru 会尝试从 DLsite 网站请求数据并返回试听内容。

![work-not-found](/images/work-not-found.webp)

## 浏览字幕

Neokikoeru 支持加载 `.lrc` 、`.vtt` 、`.srt` 、`.ass` 格式的字幕，匹配模式为精确匹配，字幕需要和音频在同一目录下，且文件名必须保持一致。

在字幕显示区域双击可弹出字幕浏览器，你可以单击某行字幕跳转到指定播放位置。

![subtitle-viewer](/images/subtitle-viewer.webp)

## 睡眠定时

功能入口：音频播放器 -> 右上角三点菜单 -> 睡眠定时，开启后音频播放将在倒计时结束后自动暂停。

![sleep-timer](/images/sleep-timer.webp)

## 文件保险箱

对文件加密以保护你的隐私，Neokikoeru 会在你阅览/播放时自动解密。

### 加密

```sh
$ neokikoeru encrypt [DIRECTORY_PATH]
```

### 解密

```sh
$ neokikoeru decrypt [DIRECTORY_PATH]
```

其中 `[DIRECTORY_PATH]` 为文件夹路径，例如 `D:\Voices\RJ334212` ，程序会递归处理文件夹下的所有文件。

> [!IMPORTANT]
> 加密文件的文件名会以 `.ncrypt` 结尾，**切勿对文件名做任何修改** ，否则 Neokikoeru 将无法正确解密。
