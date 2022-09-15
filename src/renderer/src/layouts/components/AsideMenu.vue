<script setup lang="ts" name="">
import autoAnimate from '@formkit/auto-animate';
const router = useRouter();
const route = useRoute();
const currentPath = ref('');
watch(
  () => route.path,
  (path) => (currentPath.value = path),
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
      text="gray-600 dark:gray-1"
      class="cursor-pointer"
      v-for="(item, index) in menu"
      :key="index"
    >
      <div
        transition="colors"
        bg="hover:(gray-100 dark:dark-3) active:(gray-100 dark:dark-5) "
        rounded-md
        h="10"
        w="full"
        flex="~"
        items="center"
        gap2
        px2
        class="select-none"
        :class="[
          props.collapsed ? 'collapsed' : '',
          currentPath === item.path ? 'active text-rose5' : 'text-base',
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
<style scoped lang="less">
.collapsed {
  @apply w-10 justify-center;
}
.active {
  @apply bg-gray-1 text-lg dark:bg-dark-3;
}
</style>
