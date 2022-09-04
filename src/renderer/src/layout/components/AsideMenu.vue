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
    label: '发现音乐',
    key: 'find',
    path: '/find',
    icon: 'i-ri-apps-2-fill',
  },
  {
    label: '视频MV',
    key: 'video',
    path: '/video',
    icon: 'i-ri-movie-2-fill',
  },
  {
    label: '私人FM',
    key: 'fm',
    path: '/fm',
    icon: 'i-ri-radio-fill',
  },
]);
onMounted(() => {
  domRef.value && domRef.value.forEach((el) => autoAnimate(el));
});
</script>
<template>
  <div flex="~ col 1" gap="3" items="center" overflow="x-hidden y-auto" p="y-2">
    <div
      w="full"
      p="x2"
      h="10"
      flex-center
      text="gray-600"
      class="cursor-pointer"
      v-for="(item, index) in menu"
      :key="index"
    >
      <div
        transition="colors"
        bg="hover:gray-100 active:gray-100"
        rounded-md
        h="10"
        flex="~"
        items="center"
        gap2
        px2
        class="select-none"
        :class="[
          props.collapsed ? 'w-10 justify-center' : 'w-full',
          _path === item.path ? 'bg-gray-100 text-lg' : 'text-base',
        ]"
        ref="domRef"
        @click="router.push(item.path)"
      >
        <div flex-center>
          <i :class="item.icon"></i>
        </div>
        <span v-if="!props.collapsed" transform="all ">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
