<script setup lang="ts" name="">
import { loginApi, CheckQrResult } from '~/api';
import { useAppStore } from '~/stores';
const appStore = useAppStore();
const qrImg = ref('');
const status = ref<CheckQrResult>();
const interval = ref<number | null>(null);
const checkQr = (key: string) => {
  interval.value = setInterval(async () => {
    try {
      status.value = await loginApi.checkQr(key);
      if (status.value.code === 803) {
        clearInterval(interval.value as number);
        appStore.$patch({
          cookie: status.value.cookie,
          refreshed: true,
        });
        await loginApi.status();
        window.$message.success('登录成功');
        window.$dialog.destroyAll();
      }
    } catch (error) {
      console.log(error);
    }
  }, 1000) as unknown as number;
};
const init = async () => {
  try {
    const qrKey = await loginApi.getQrKey();
    qrImg.value = await loginApi.getQr(qrKey);
    checkQr(qrKey);
  } catch (error) {
    console.log(error);
  }
};
init();
onUnmounted(() => {
  clearInterval(interval.value as number);
});
</script>
<template>
  <div>
    <img :src="qrImg" />
    <p>{{ status?.message }}</p>
    <p>{{ status?.nickname }}</p>
  </div>
</template>
<style scoped lang="less"></style>
