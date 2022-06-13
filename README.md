# Element Plus With UnoCSS

> 参考<https://github.com/element-plus/element-plus-vite-starter>和<https://github.com/sxzz/element-plus-best-practices>配置进行优化搭建。

包含了自定义配色主题和各种自动导入。

但是我发现自动导入样式和组件，有时候好像样式会丢掉（频率很高）。插件用多了似乎并不是什么好事（虽然确实很方便）。如果你也发现了这种情况不要慌张，重启下VSCode试试看吧。

如果不需要自己配置主题，就把scss那些相关的预加载（ `vite.config.ts` ）和 `main.ts` 引用的样式移除吧。

演示：<https://vite-element-plus-unocss.netlify.app/>

## 备注

开发模式下，暂时未能寻找到引入 `TailwindCSS` 的 `reset` 后，导致 `el-button` 的样式覆盖问题（同[Vite中ElementPlus和TailwindCSS最佳实践（一）](https://github.com/whidy/elementplus-tailwindcss-best-practice)），因为发现无法控制开发模式下的加载顺序。不过通过修改 `vite.config.ts` 中 `build` 部分达到避免（因为也许不用加也可以）生产环境下 `Element-Plus` 的样式文件在后面。部分配置代码：

```js
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('element-plus/theme-chalk/')) {
          return 'element-plus'
        }
      },
    },
  },
},
```
