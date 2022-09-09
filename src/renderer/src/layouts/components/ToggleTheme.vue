<script setup lang="ts" name="">
import { useAppStore } from '~/stores';
const { themeColor } = storeToRefs(useAppStore());
const colorList = [
  { name: '朱砂', color: '#ff461f' },
  { name: '火红', color: '#ff2d51' },
  { name: '鹅黄', color: '#fff143' },
  { name: '蔚蓝', color: '#70f3ff' },
  { name: '石青', color: '#1685a9' },
  { name: '靛蓝', color: '#065279' },
  { name: '品红', color: '#f00056' },
  { name: '宝蓝', color: '#4b5cc4' },
  { name: '蓝灰色', color: '#a1afc9' },
  { name: '青葱', color: '#0aa344' },
  { name: '黛紫', color: '#574266' },
  { name: '乌色', color: '#725e82' },
  { name: '玄青', color: '#3d3b4f' },
  { name: '丁香色', color: '#cca4e3' },
  { name: '鸦青', color: '#424c50' },
  { name: '藕色', color: '#edd1d8' },
];
</script>
<template>
  <n-popover style="width: 280px" placement="top" trigger="click">
    <template #trigger>
      <n-button secondary circle strong>
        <i class="i-ri-t-shirt-2-line"></i>
      </n-button>
    </template>
    <div flex="~ wrap" justify="between" gap="x-1 y-2" class="h-full w-full">
      <div
        flex-center
        v-for="(item, index) in colorList"
        :key="index"
        class="rounded-md cursor-pointer h-26px w-26px"
        :style="{ backgroundColor: item.color }"
        @click="themeColor.primary = item.color"
      >
        <i
          text="opacity-80 xl white"
          class="i-ri-check-fill"
          v-if="themeColor.primary === item.color"
        ></i>
      </div>
      <n-color-picker
        size="small"
        v-model:value="themeColor.primary"
        :show-preview="true"
      />
    </div>
  </n-popover>
</template>
<style scoped lang="less"></style>
