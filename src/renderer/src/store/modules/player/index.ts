import { defineStore } from 'pinia'
import { addPlayList } from './helps'
import { SongType, songApi } from '@@/api'
type SongDetail = SongType['songDetail']
export const usePlayerStore = defineStore(
    'playerStore',
    () => {
        const playing = ref(false)
        const song = computed(() => list.value.find(item => item.id === id.value))
        const list = ref<SongDetail['songs']>([])
        const url = ref<string>('')
        const id = ref<number | undefined>()
        const volume = ref<number>(1)
        const mode = ref<'loop' | 'order' | 'repeat' | 'random'>('loop')
        const index = computed(() => list.value.findIndex(item => item.id === id.value))
        const currentTime = ref<number>(0)
        const updateCurrentTime = ref<number | undefined>()
        const duration = ref<number>(0)
        const _currentTime = computed(() => `${Math.floor(currentTime.value / 60).toString().padStart(2, '0')}:${(currentTime.value % 60).toString().padStart(2, '0')}`)
        const _duration = computed(() => `${Math.floor(duration.value / 60).toString().padStart(2, '0')}:${(duration.value % 60).toString().padStart(2, '0')}`)
        const progress = computed(() => {
            return currentTime.value / duration.value * 100 | 0
        })
        const play = async (ids: number | number[]) => {
            const idIsArray = Array.isArray(ids)
            if (!idIsArray) {
                if (list.value.some(item => item.id === ids)) {
                    id.value = ids
                    url.value = (await songApi.songUrl(ids)).url
                    playing.value = true
                    return
                }
            }
            try {
                const { id: _id, url: _url } = await addPlayList(ids, list)
                url.value = _url
                id.value = _id
                playing.value = true
            } catch (error) {
                return error
            }
        }
        const prev = () => {

        }
        const next = () => {

        }
        const progressUpdate = (value: number) => {
            updateCurrentTime.value = parseFloat((duration.value * (value / 100)).toFixed(2))
        }
        const clearList = () => {
            list.value = []
            playing.value = false
            updateCurrentTime.value = 0
        }
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
            clearList
        }
    },
    {
        persist: {
            key: '__player__',
            paths: []
        }
    }
)
