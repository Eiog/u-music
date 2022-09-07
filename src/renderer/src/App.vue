<script setup lang="ts">
import Layout from './layout/Layout.vue';
import { NaiveProvider } from '@@/components';
import { useAppStore } from './store';
const { naiveThemeMode, naiveThemeOverrides } = storeToRefs(useAppStore());
</script>

<template>
  <n-config-provider
    abstract
    :theme="naiveThemeMode"
    :theme-overrides="naiveThemeOverrides"
  >
    <naive-provider>
      <Layout />
    </naive-provider>
    <n-global-style />
  </n-config-provider>
</template>

<style lang="less"></style>
