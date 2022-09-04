<script setup lang="ts" name="">
type Props = {
  run: boolean;
};
type Emit = {
  (e: 'update:run', run: boolean): void;
};
const props = defineProps<Props>();
const emit = defineEmits<Emit>();
const _run = ref(props.run);
watch(
  () => props.run,
  (run) => {
    _run.value = run;
    emit('update:run', run);
  },
);
</script>
<template>
  <div flex-center>
    <div w="60" h="60" rounded-full overflow="hidden" bg="gray-100"></div>
  </div>
</template>
<style scoped lang="less"></style>
