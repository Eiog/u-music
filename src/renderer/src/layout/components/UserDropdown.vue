<script setup lang="ts" name="">
import { DropdownOption, NInput, NButton } from 'naive-ui';
import LoginPanel from './LoginPanel.vue';
type Props = {
  isLogin?: boolean;
};
const props = defineProps<Props>();
const options: DropdownOption[] = [
  {
    key: '',
  },
];
const handleRenderLoginWindow = () => {
  window.$dialog.create({
    title: '登录',
    content: () => {
      return h(LoginPanel, {}, {});
    },
  });
};
</script>
<template>
  <n-button secondary v-if="!props.isLogin" @click="handleRenderLoginWindow">
    登录
  </n-button>
  <n-dropdown :options="options" v-if="props.isLogin">
    <div flex-center gap="3">
      <n-avatar
        round
        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      />
      <n-ellipsis style="max-width: 60px"> name1111111 </n-ellipsis>
    </div>
  </n-dropdown>
</template>
<style scoped lang="less"></style>
