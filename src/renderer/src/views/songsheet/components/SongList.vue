<script setup lang="ts">
import { playlistApi } from '~/api';
type Props = {
  id: number | string;
};
const props = defineProps<Props>();
playlistApi.trackAll(props.id);
</script>
<template></template>
<style scoped lang="less"></style>
