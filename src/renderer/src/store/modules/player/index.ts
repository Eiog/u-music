import { defineStore } from 'pinia'
import { addPlayList } from './helps'
import { SongType } from '@@/api'
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
        const duration = ref<number>(0)
        const progress = computed(() => {
            return currentTime.value / duration.value * 100 | 0
        })
        const play = async (ids: number | number[]) => {
            if (Array.isArray(ids)) {
                list.value = []

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
            duration,
            progress,
            play,
            prev,
            next
        }
    },
    {
        persist: {
            key: '__player__',
            paths: []
        }
    }
)
