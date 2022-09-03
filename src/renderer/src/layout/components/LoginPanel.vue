<script setup lang="ts" name="">
import PhoneLogin from './PhoneLogin.vue';
</script>
<template>
  <n-tabs class="card-tabs" default-value="phone-login" size="large" animated>
    <n-tab-pane name="phone-login" tab="手机验证码登录">
      <PhoneLogin />
    </n-tab-pane>
    <n-tab-pane name="qr-login" tab="二维码登录"></n-tab-pane>
  </n-tabs>
</template>
<style scoped lang="less"></style>
