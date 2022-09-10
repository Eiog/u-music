<script setup lang="ts">
import { REGEXP_PHONE, REGEXP_EMAIL } from '~/utils';
const formValue = ref({
  accoutn: '',
  md5Password: '',
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
const handleValidate = () => {};
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
        placeholder="请输入手机号或者邮箱"
      />
    </n-form-item-row>
    <n-form-item-row label="密码">
      <n-input v-model:value="formValue.md5Password" placeholder="请输入密码" />
    </n-form-item-row>
    <n-button type="primary" block secondary strong @click="handleValidate">
      登录
    </n-button>
  </n-form>
</template>
<style scoped lang="less"></style>
