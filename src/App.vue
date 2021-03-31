<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const menuVisible = ref(false);
    provide("xxx", menuVisible); //标记为所有的后代均可以使用
  },
};
</script>
