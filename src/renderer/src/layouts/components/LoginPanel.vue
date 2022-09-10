<script setup lang="ts" name="">
import PasswordLogin from './PasswordLogin.vue';
import PhoneCodeLogin from './PhoneCodeLogin.vue';
import QrLogin from './QrLogin.vue';
</script>
<template>
  <n-tabs
    class="card-tabs"
    default-value="password-login"
    size="large"
    animated
  >
    <n-tab-pane name="password-login" tab="账号密码登录">
      <PasswordLogin />
    </n-tab-pane>
    <n-tab-pane name="phone-code-login" tab="手机验证码登录">
      <PhoneCodeLogin />
    </n-tab-pane>
    <n-tab-pane name="qr-login" tab="二维码登录">
      <QrLogin />
    </n-tab-pane>
  </n-tabs>
</template>
<style scoped lang="less"></style>
