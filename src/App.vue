<template>
  <ul
    flex
    flex-row
    justify-center
    py-6>
    <li px-2><router-link :to="{ name: 'home' }">Home</router-link></li>
    <li px-2><router-link :to="{ name: 'unocss' }">UnoCSS</router-link></li>
    <li px-2><router-link :to="{ name: 'about' }">About</router-link></li>
  </ul>
  <el-config-provider namespace="ep">
    <div py-12>
      <router-view />
    </div>
  </el-config-provider>
</template>
