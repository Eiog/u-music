<script setup lang="ts" name="">
import { useAppStore } from '@@/store';
import PlayerMini from './PlayerMini.vue';
import PlayerCover from './PlayerCover.vue';
import PlayerLyric from './PlayerLyric.vue';
import PlayerRec from './PlayerRec.vue';
const appStore = useAppStore();
type Props = {
  show: boolean;
};
type Emit = {
  (e: 'update:show', show: boolean): void;
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const _show = ref(props.show);
watch(
  () => props.show,
  (show) => {
    _show.value = show;
    emit('update:show', _show.value);
  },
);
const _showClass = computed(() => {
  return _show.value
    ? `visible opacity-100 translate-y-0`
    : `invisible opacity-0 translate-y-100%`;
});
</script>
<template>
  <div
    fixed
    left="0"
    top="14"
    right="0"
    bottom="0"
    flex="~ col 1"
    bg="opacity-40 white"
    transition="all duration-300 ease-in-out"
    class="z-999 backdrop-blur-xl"
    :class="_showClass"
  >
    <main flex="~ col 1">
      <div flex="~ col">
        <h1></h1>
        <p></p>
      </div>
      <div flex="~ 1">
        <PlayerCover w="1/3" />
        <PlayerLyric w="1/3" />
        <PlayerRec w="1/3" />
      </div>
    </main>
    <footer w="full" h="20">
      <PlayerMini />
    </footer>
  </div>
</template>
<style scoped lang="less"></style>
