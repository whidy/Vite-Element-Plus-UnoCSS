# Element Plus With UnoCSS

> 参考<https://github.com/element-plus/element-plus-vite-starter>和<https://github.com/sxzz/element-plus-best-practices>配置进行优化搭建。

包含了自定义配色主题和各种自动导入。

但是我发现自动导入样式和组件，有时候好像样式会丢掉（频率很高）。插件用多了似乎并不是什么好事（虽然确实很方便）。如果你也发现了这种情况不要慌张，重启下VSCode试试看吧。

如果不需要自己配置主题，就把scss那些相关的预加载（ `vite.config.ts` ）和 `main.ts` 引用的样式移除吧。
