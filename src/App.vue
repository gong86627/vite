<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true); //控制边栏是否显示
    provide("menuVisible", menuVisible); //标记为所有的后代均可以使用
    router.afterEach(() => {
      //切换路由后关闭aside
      if (width <= 500) menuVisible.value = false;
    });
  },
};
</script>
