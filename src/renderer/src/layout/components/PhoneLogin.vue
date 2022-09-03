<script setup lang="ts" name="">
import { FormRules, FormItemRule, FormInst, CountdownInst } from 'naive-ui';
import { loginApi } from '@@/api';
const formRef = ref<FormInst | null>(null);
const formValue = ref({
  phone: '',
  code: '',
});
const isPhone = computed(() => {
  return /^1[3|4|5|7|8]\d{9}$/.test(formValue.value.phone) ? true : false;
});

const phoneValidateStatus = computed(() =>
  isPhone.value ? 'success' : 'error',
);
const phoneValidateFeedback = computed(() =>
  isPhone.value ? '' : '手机号格式错误',
);

const handleValidate = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((err) => {
    console.log(err);
  });
};

const handleGetCode = (e) => {
  e.preventDefault();
  if (!isPhone.value) return window.$message.error('请输入正确手机号');
  loginApi.getPhoneCode(formValue.value.phone).then((res) => {
    window.$message.success('发送成功');
    isAwait.value = true;
  });
};
const countdownRef = ref<CountdownInst | null>(null);
const isAwait = ref(false);
const onFinish = () => {
  isAwait.value = false;
  countdownRef.value?.reset();
};
const handleLogin = () => {};
</script>
<template>
  <n-form ref="formRef" :model="formValue">
    <n-form-item-row
      label="用户名"
      :validation-status="phoneValidateStatus"
      :feedback="phoneValidateFeedback"
    >
      <n-input v-model:value="formValue.phone" placeholder="请输入手机号" />
    </n-form-item-row>
    <n-form-item-row label="验证码">
      <n-input-group>
        <n-input v-model:value="formValue.code" placeholder="请输入验证码" />
        <n-button
          type="primary"
          ghost
          :disabled="isAwait"
          @click="handleGetCode"
        >
          <span v-if="!isAwait"> 获取验证码 </span>
          <n-countdown
            v-if="isAwait"
            ref="countdownRef"
            :duration="1000 * 60"
            :active="isAwait"
            @finish="onFinish"
          />
        </n-button>
      </n-input-group>
    </n-form-item-row>
    <n-button type="primary" block secondary strong @click="handleValidate">
      登录
    </n-button>
  </n-form>
</template>
<style scoped lang="less"></style>
