<script setup lang="ts" name="">
import { usePlayerStore } from '~/stores';
const { playing, url, currentTime, updateCurrentTime, duration, volume } =
  storeToRefs(usePlayerStore());
const { next } = usePlayerStore();
const audioRef = ref<HTMLAudioElement | null>(null);
const audioUpdateEvent = (e: Event) => {
  currentTime.value = e.target!['currentTime'] | 0;
  duration.value = e.target!['duration'] | 0;
};
const audioErrEvent = (e) => {
  playing.value = false;
};
const audioEndedEvent = (e) => {
  playing.value = false;
  next(true);
};
const init = () => {
  if (!audioRef.value) return;
  watch(playing, (playing) => {
    if (playing) audioRef.value?.play();
    if (!playing) audioRef.value?.pause();
  });
  watch(
    volume,
    (volume) => {
      if (!audioRef.value) return;
      audioRef.value.volume = volume / 100;
    },
    { immediate: true },
  );
  watch(updateCurrentTime, (time) => {
    if (!audioRef.value) return;
    audioRef.value.currentTime = time || 0;
  });
  audioRef.value.addEventListener('timeupdate', audioUpdateEvent);
  audioRef.value.addEventListener('error', audioErrEvent);
  audioRef.value.addEventListener('ended', audioEndedEvent);
};
onMounted(() => {
  init();
});
onUnmounted(() => {
  removeEventListener('timeupdate', audioUpdateEvent);
  removeEventListener('error', audioErrEvent);
  removeEventListener('ended', audioEndedEvent);
});
</script>
<template>
  <audio ref="audioRef" display="none" :autoplay="playing" :src="url"></audio>
</template>
<style scoped lang="less"></style>
