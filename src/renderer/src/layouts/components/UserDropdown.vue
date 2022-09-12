<script setup lang="ts" name="">
import { NButton } from 'naive-ui';
import LoginPanel from './LoginPanel.vue';
import { useAppStore } from '~/stores';
import { loginApi } from '~/api';
const { profile, cookie } = storeToRefs(useAppStore());
const handleLogOut = () => {
  loginApi.logOut().then(() => {
    window.$message.success('退出登录');
  });
};
const handleRenderLoginWindow = () => {
  window.$dialog.create({
    title: '登录',
    maskClosable: false,
    content: () => {
      return h(LoginPanel, {}, {});
    },
  });
};
</script>
<template>
  <n-button secondary v-if="!profile" @click="handleRenderLoginWindow">
    {{ cookie ? '游客账号' : '未登录' }}
  </n-button>
  <n-popover trigger="click" v-if="profile">
    <template #trigger>
      <div flex-center gap="3">
        <n-avatar class="cursor-pointer" round :src="profile.avatarUrl" />
        <n-ellipsis style="max-width: 80px" class="cursor-pointer">
          {{ profile.nickname }}
        </n-ellipsis>
      </div>
    </template>
    <div w="220px" h="300px" flex="~ col">
      <div
        flex="~"
        items="center"
        gap="1"
        cursor="pointer"
        bg="white hover:gray-1"
        transition="colors"
        p="2"
        rounded="md"
        @click="handleLogOut"
      >
        <i i-ri-logout-circle-r-line></i>
        <span>退出登录</span>
      </div>
    </div>
  </n-popover>
</template>
<style scoped lang="less"></style>
