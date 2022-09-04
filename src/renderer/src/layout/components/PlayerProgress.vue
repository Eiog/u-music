<script setup lang="ts" name="">
type Props = {
  value: number;
};
type Emit = {
  (e: 'update:value', value: number): void;
};
const props = withDefaults(defineProps<Props>(), {
  value: 0,
});
const emit = defineEmits<Emit>();
const _value = ref(props.value);
watch(
  () => props.value,
  (value) => {
    _value.value = value;
    emit('update:value', value);
  },
);
</script>
<template>
  <div w="full" h="1" relative rounded-full overflow="hidden" bg="gray-200">
    <div
      absolute
      h="1"
      left="0"
      top="0"
      bg="rose-600"
      :style="{ width: `${_value}%` }"
    ></div>
  </div>
</template>
<style scoped lang="less"></style>
