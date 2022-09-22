<script setup lang="ts" name="">
const { song, playing } = storeToRefs(usePlayerStore());
</script>
<template>
  <div flex-center>
    <div
      w="60"
      h="60"
      flex-center
      rounded-full
      shadow="2xl"
      overflow="hidden"
      bg="opacity-60 gray-100"
      p="3"
      class="animate-rotate"
      :style="{ animationPlayState: playing ? '' : 'paused' }"
    >
      <div
        w="full"
        h="full"
        p="5"
        rounded-full
        overflow="hidden"
        flex-center
        shadow="xl inner"
        class="bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900"
      >
        <div
          flex-center
          w="full"
          h="full"
          p="2"
          bg="opacity-50 gray-200"
          rounded-full
          overflow="hidden"
          shadow="xl"
        >
          <div
            w="full"
            h="full"
            flex-center
            rounded-full
            relative
            overflow="hidden"
          >
            <i
              v-if="!song"
              transform="scale-500"
              text="gray-500"
              i-ri-album-fill
            ></i>
            <div
              absolute
              inset-0
              flex-center
              transition="colors"
              bg=" opacity-0 black hover:opacity-30"
              roundex-full
              overflow="hidden"
              class="cursor-pointer group"
              :class="playing ? '' : '!bg-opacity-30'"
              @click="playing = !playing"
            >
              <i
                text="white 3xl"
                z="1"
                transition="opacity"
                opacity="0"
                group-hover="!opacity-100"
                :class="
                  playing
                    ? 'i-ri-pause-fill !opacity-0'
                    : 'i-ri-play-fill !opacity-100'
                "
              ></i>
            </div>
            <img v-if="song" w="full" h="full" :src="song.al.picUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.animate-rotate {
  animation: rotate 12s infinite linear backwards;
}
@keyframes rotate {
  form {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
