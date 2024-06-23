<script setup lang="ts"></script>

<template>
  <el-button>默认按钮</el-button>
  <button>123</button>
  <a-button type="primary">Primary Button</a-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
