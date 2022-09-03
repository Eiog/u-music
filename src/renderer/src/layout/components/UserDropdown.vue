<script setup lang="ts" name="">
import { DropdownOption, NButton } from 'naive-ui';
import LoginPanel from './LoginPanel.vue';
import { useAppStore } from '@@/store';
import { loginApi } from '@@/api';
const { profile } = storeToRefs(useAppStore());

const options: DropdownOption[] = [
  {
    key: 'logout',
    label: '退出登录',
    props: {
      onClick: () => {
        loginApi.logOut().then(() => {
          window.$message.success('退出登录');
        });
      },
    },
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
  <n-button secondary v-if="!profile" @click="handleRenderLoginWindow">
    登录
  </n-button>
  <n-dropdown :options="options" v-if="profile">
    <div flex-center gap="3">
      <n-avatar class="cursor-pointer" round :src="profile.avatarUrl" />
      <n-ellipsis style="max-width: 60px" class="cursor-pointer">
        {{ profile.nickname }}
      </n-ellipsis>
    </div>
  </n-dropdown>
</template>
<style scoped lang="less"></style>
