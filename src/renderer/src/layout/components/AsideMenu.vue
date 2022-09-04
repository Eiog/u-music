<script setup lang="ts" name="">
import autoAnimate from '@formkit/auto-animate';
const router = useRouter();
const route = useRoute();
const _path = ref('');
watch(
  () => route.path,
  (path) => (_path.value = path),
);
const domRef = ref<HTMLElement[]>();
type Props = {
  collapsed: boolean;
};
const props = defineProps<Props>();
const menu = ref([
  {
    label: '发现',
    key: 'find',
    path: '/find',
  },
]);
onMounted(() => {
  domRef.value && domRef.value.forEach((el) => autoAnimate(el));
});
</script>
<template>
  <div flex="~ col 1" items="center" overflow="x-hidden y-auto" p="y-2">
    <div
      w="full"
      p="x2"
      h="12"
      flex-center
      text="gray-600"
      class="cursor-pointer"
      v-for="(item, index) in menu"
      :key="index"
    >
      <div
        transition="colors"
        bg="gray-200 hover:gray-300"
        rounded-xl
        h="12"
        flex="~"
        items="center"
        gap2
        px2
        :class="[
          props.collapsed ? 'w-12 justify-center' : 'w-full',
          _path === item.path ? '!bg-gray-300' : '',
        ]"
        ref="domRef"
        @click="router.push(item.path)"
      >
        <div flex-center>
          <i class="text-2xl i-ri-apps-2-fill"></i>
        </div>
        <span v-if="!props.collapsed" text="xl">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
