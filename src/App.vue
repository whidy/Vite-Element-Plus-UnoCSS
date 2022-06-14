<script lang="ts" setup>
const handleClick = () => {
  ElMessage.success("Hello Whidy");
};
const handleClick2 = () => {
  ElMessageBox.alert("Hello You!", "Boom", {});
};
</script>
<template>
  <el-config-provider namespace="ep">
    <div h-xl flex flex-col>
      <h1>
        这是一个<a href="https://vite-element-plus-unocss.netlify.app/">Demo!</a>
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
  </el-config-provider>
  <div v-loading="{ text: 'Loading...' }" style="height: 100px">
    Loading Area
  </div>
</template>
