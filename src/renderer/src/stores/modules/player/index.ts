import { defineStore } from 'pinia';
import { addPlayList } from './helps';
import { SongType, songApi } from '~/api';
type SongDetail = SongType['songDetail'];
export const usePlayerStore = defineStore(
  'playerStore',
  () => {
    const playing = ref(false);
    const song = computed(() =>
      list.value.find((item) => item.id === id.value),
    );
    const list = ref<SongDetail['songs']>([]);
    const replaceList = ref<Boolean>(true);
    const url = ref<string>('');
    const id = ref<number | undefined>();
    const volume = ref<number>(80);
    const mode = ref<'loop' | 'order' | 'repeat' | 'random'>('loop');
    const modeList = ref<('loop' | 'order' | 'repeat' | 'random')[]>([
      'loop',
      'order',
      'repeat',
      'random',
    ]);
    const index = computed(() =>
      list.value.findIndex((item) => item.id === id.value),
    );
    const currentTime = ref<number>(0);
    const updateCurrentTime = ref<number | undefined>();
    const duration = ref<number>(0);
    const _currentTime = computed(
      () =>
        `${Math.floor(currentTime.value / 60)
          .toString()
          .padStart(2, '0')}:${(currentTime.value % 60)
          .toString()
          .padStart(2, '0')}`,
    );
    const _duration = computed(
      () =>
        `${Math.floor(duration.value / 60)
          .toString()
          .padStart(2, '0')}:${(duration.value % 60)
          .toString()
          .padStart(2, '0')}`,
    );
    const progress = computed(() => {
      return ((currentTime.value / duration.value) * 100) | 0;
    });
    const play = async (ids: number | number[]) => {
      const idIsArray = Array.isArray(ids);
      if (idIsArray && replaceList.value) list.value = [];
      if (!idIsArray) {
        if (list.value.some((item) => item.id === ids)) {
          id.value = ids;
          playing.value = false;
          url.value = '';
          url.value = (await songApi.url(ids)).url;
          playing.value = true;
          return;
        }
      }
      try {
        playing.value = false;
        url.value = '';
        const { id: _id, url: _url } = await addPlayList(ids, list);
        url.value = _url;
        id.value = _id;
        playing.value = true;
      } catch (error) {
        return error;
      }
    };
    const prev = () => {
      switch (mode.value) {
        case 'loop':
          if (index.value === 0)
            return play(list.value[list.value.length - 1].id);
          return play(list.value[index.value - 1].id);
          break;
        case 'order':
          if (index.value === 0)
            return play(list.value[list.value.length - 1].id);
          return play(list.value[index.value - 1].id);
          break;
        case 'random':
          const nextIndex = parseInt(
            (Math.random() * (list.value.length - 1)).toFixed(0),
          );
          play(list.value[nextIndex].id);
          return;
          break;
        case 'repeat':
          return play(list.value[index.value].id);
          break;
        default:
          return;
          break;
      }
    };
    const next = (autoPlay: boolean = false) => {
      switch (mode.value) {
        case 'loop':
          if (index.value === list.value.length - 1)
            return play(list.value[0].id);
          return play(list.value[index.value + 1].id);
          break;
        case 'order':
          if (index.value === list.value.length - 1) {
            if (autoPlay) return;
            return play(list.value[0].id);
          }
          return play(list.value[index.value + 1].id);
          break;
        case 'random':
          const nextIndex = parseInt(
            (Math.random() * (list.value.length - 1)).toFixed(0),
          );
          play(list.value[nextIndex].id);
          return;
          break;
        case 'repeat':
          return play(list.value[index.value].id);
          break;
        default:
          return;
          break;
      }
    };
    const changeMode = () => {
      const index = modeList.value.findIndex((item) => item === mode.value);
      if (index >= modeList.value.length - 1)
        return (mode.value = modeList.value[0]);
      return (mode.value = modeList.value[index + 1]);
    };
    const changeVolume = (val: number) => {
      volume.value = val || 0;
    };
    const progressUpdate = (value: number) => {
      updateCurrentTime.value = parseFloat(
        (duration.value * (value / 100)).toFixed(2),
      );
    };
    const clearList = () => {
      list.value = [];
      playing.value = false;
      updateCurrentTime.value = 0;
    };
    return {
      playing,
      song,
      list,
      url,
      id,
      volume,
      mode,
      index,
      currentTime,
      updateCurrentTime,
      _currentTime,
      _duration,
      duration,
      progress,
      play,
      prev,
      next,
      progressUpdate,
      clearList,
      changeMode,
      changeVolume,
    };
  },
  {
    persist: {
      key: '__player__',
      paths: [
        'replaceList',
        'volume',
        'mode',
        'list',
        'id',
        'currentTime',
        'duration',
        'url',
      ],
    },
  },
);
