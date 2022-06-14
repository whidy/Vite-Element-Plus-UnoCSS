# Vite Element Plus UnoCSS

> 参考<https://github.com/element-plus/element-plus-vite-starter>和<https://github.com/sxzz/element-plus-best-practices>配置进行优化搭建。

包含了自定义配色主题和各种自动导入。

但是我发现自动导入样式和组件，有时候好像样式会丢掉（频率很高）。插件用多了似乎并不是什么好事（虽然确实很方便）。如果你也发现了这种情况不要慌张，重启下VSCode试试看吧。

如果不需要自己配置主题，就把scss那些相关的预加载（ `vite.config.ts` ）和 `main.ts` 引用的样式移除吧。

演示：<https://vite-element-plus-unocss.netlify.app/>

## 备注

有一些其他的改动，完全根据个人喜好定制，做一些简单的说明。

### CSS Reset

该Demo使用了 `normalize.css` 的reset样式。【[WHY?](https://github.com/whidy/Vite-Element-Plus-UnoCSS/tree/with-tailwindcss-reset)】

> 当然，你必须了解normalize不是传统意义的reset，如果有些地方不满意，你仍然需要reset一下（比如元素的内外边距，a标签的下划线，列表的style等等）。

### ESLint

个人喜好明明白白的建项目，倒不是说之前sxzz的规则不好，大佬的规则中可以学到很多，然而我还是自己定制了适合自己的规则，想省事的话就不必要折腾了。

![对比，左侧sxzz，右侧定制](./docs/code-compared-eslint.png)
