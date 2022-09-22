<script setup lang="ts">
import { loginApi } from '~/api';
const formValue = ref({
  accoutn: '18646153654',
  password: 'cc995801',
});
const judgeType = computed(() => {
  if (REGEXP_PHONE.test(formValue.value.accoutn)) return 'phone';
  if (REGEXP_EMAIL.test(formValue.value.accoutn)) return 'email';
  return undefined;
});
const accountValidateStatus = computed(() =>
  judgeType.value ? 'success' : 'error',
);
const accountValidateFeedback = computed(() =>
  judgeType.value ? '' : '用户名格式错误',
);
const handleValidate = async () => {
  const { accoutn, password } = formValue.value;
  if (!judgeType.value) return;
  try {
    if (judgeType.value === 'phone')
      await loginApi.phoneLogin(accoutn, password);
    if (judgeType.value === 'email')
      await loginApi.emailLogin(accoutn, password);
    window.$message.success('登录成功');
    window.$dialog.destroyAll();
  } catch (error) {
    window.$message.error('登录失败');
  }
};
</script>
<template>
  <n-form ref="formRef" :model="formValue">
    <n-form-item-row
      label="用户名"
      :validation-status="accountValidateStatus"
      :feedback="accountValidateFeedback"
    >
      <n-input
        v-model:value="formValue.accoutn"
        type="text"
        placeholder="请输入手机号或者邮箱"
      />
    </n-form-item-row>
    <n-form-item-row label="密码">
      <n-input
        v-model:value="formValue.password"
        type="password"
        placeholder="请输入密码"
      />
    </n-form-item-row>
    <n-button type="primary" block secondary strong @click="handleValidate">
      登录
    </n-button>
  </n-form>
</template>
<style scoped lang="less"></style>
