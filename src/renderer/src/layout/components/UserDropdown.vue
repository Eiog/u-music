<script setup lang="ts" name="">
import { DropdownOption } from 'naive-ui';
type Props = {
  isLogin?: boolean;
};
const props = defineProps<Props>();
const options: DropdownOption[] = [
  {
    key: '',
  },
];
</script>
<template>
  <n-button secondary v-if="!props.isLogin"> 登录 </n-button>
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
