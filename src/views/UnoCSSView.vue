<script lang="ts" setup>
/**
 * icon tricks by Whidy, 2023年08月14日
 * here icon list below:
 * i-mdi-github group-hover:i-mdi-github
 * 建议保持上面的格式书写，否则不管用哦~（比如你加个逗号就凉凉，因为class里面怎么会有逗号呢）
 */

const handleClick = () => {
  ElMessage.success("Hello Whidy");
};
const handleClick2 = () => {
  ElMessageBox.alert("Hello You!", "Boom", {});
};
const icon = "github";
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 5000);
</script>

<template>
  <div h-xl flex flex-col>
    <h1>
      这是一个<a href="https://github.com/whidy/Vite-Element-Plus-UnoCSS">Demo!</a>
    </h1>
    <p>
      结合了<a
        href="https://github.com/element-plus/element-plus-vite-starter"
        target="_blank">element-plus-vite-starter</a>和<a
          href="https://github.com/sxzz/element-plus-best-practices"
          target="_blank">element-plus-best-practices</a>
    </p>
    <el-space direction="vertical">
      <div i-mdi-alarm text-blue-800 text-2xl></div>
      <div class="i-ep-aim text-orange-400"></div>
      <p>
        下面这个github图标是动态导入的，你需要特殊处理！方法很多，可以直接在该组件源码部分添加个注释，也可以试着阅读<a
          href="https://www.whidy.net/unocss-dynamic-icon-not-show"
          target="_blank">UnoCSS动态图标icon无法显示解决方案</a>
      </p>
      <div class="group flex flex-col items-center border b-solid b-blue">
        <p>测试group下的icon变化</p>
        <p>经发现，如果是group的icon，则需要在顶部也“声明”一下<span text-emerald>group-hover:i-mdi-github</span>否则无法识别。</p>
        <a
          href="https://github.com/whidy/Vite-Element-Plus-UnoCSS"
          target="_blank"
          :class="`i-mdi:account-question group-hover:i-mdi-${icon}`"
          text-gray-600
          hover:text-black
          text-6xl></a>
      </div>
    </el-space>
    <el-button-group flex justify-center>
      <el-button
        type="primary"
        a="a"
        b="b"
        c="s"
        @click="handleClick">alert</el-button>
      <el-button type="info" @click="handleClick2">测试</el-button>
    </el-button-group>
  </div>
  <div
    v-loading="loading"
    element-loading-text="Loading..."
    style="height: 100px">
    Loading Area(5 seconds later will be done.)
  </div>
</template>

<style lang="scss" scoped></style>
