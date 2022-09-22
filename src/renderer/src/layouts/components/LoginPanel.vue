<script setup lang="ts" name=""></script>
<template>
  <n-tabs
    class="card-tabs"
    default-value="password-login"
    size="large"
    animated
  >
    <n-tab-pane name="password-login" tab="账号密码登录">
      <password-login />
    </n-tab-pane>
    <n-tab-pane name="phone-code-login" tab="手机验证码登录">
      <phone-code-login />
    </n-tab-pane>
    <n-tab-pane name="qr-login" tab="二维码登录">
      <qr-login />
    </n-tab-pane>
  </n-tabs>
</template>
<style scoped lang="less"></style>
