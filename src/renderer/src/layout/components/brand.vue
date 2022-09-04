<script setup lang="ts" name="">
import icon from '@@/assets/cloud-music.svg';
import autoAnimate from '@formkit/auto-animate';
const domRef = ref<HTMLElement>();
type Props = {
  collapsed?: boolean;
};
const props = defineProps<Props>();
onMounted(() => {
  domRef.value && autoAnimate(domRef.value);
});
</script>
<template>
  <div
    h="16"
    w="40"
    overflow="hidden"
    flex="~"
    items="center"
    p="x-2"
    gap2
    ref="domRef"
  >
    <img :src="icon" w="12" h="12" class="object-cover" />
    <p v-if="!props.collapsed" text="2xl" font="light">Music</p>
  </div>
</template>
<style scoped lang="less">
div {
  -webkit-app-region: drag;
}
</style>
