# DLsite 配置

对应配置文件的 `dlsite` 项。

```json
{
  "locale": "zh-CN",
  "images_dir": "$HOME/Library/Application Support/neokikoeru/images",
  "trim_outer_brackets": true,
  "proxy_url": "",
  "proxy_secret": ""
}
```

## locale

你可以通过自定义该属性来实现作品元数据的本地化。

| 属性值   | 说明      |
|-------|---------|
| ja-JP | 日本語     |
| en-US | English |
| zh-CN | 简体中文    |
| zh-TW | 繁體中文    |
| ko-KR | 한국어     |

## trim_outer_brackets

Neokikoeru 刮削时默认会去除作品标题外层括号包裹的内容，这些一般是与标题无关的信息，例如：

| 原标题                                 | 刮削后                 |
|-------------------------------------|---------------------|
| 【碧蓝航线ASMR】治愈指挥官小分队!・敦刻尔克的甜蜜午后       | 治愈指挥官小分队!・敦刻尔克的甜蜜午后 |
| 【简体中文版】【雨声木琴】道草屋-田平子6-雨中的旅馆时光【指套牙刷】 | 道草屋-田平子6-雨中的旅馆时光    |

如果你希望保留，请设置为 `false`。
