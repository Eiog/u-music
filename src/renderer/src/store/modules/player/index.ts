import { defineStore } from 'pinia'
export const usePlayerStore = defineStore(
    'playerStore',
    () => {
        const playing = ref(false)
        const list = ref([])
        const url = ref<string>('')
        const volume = ref<number>(1)
        const mode = ref<'loop' | 'order' | 'repeat' | 'random'>('loop')
        const index = ref<number | undefined>(undefined)
        const currentTime = ref<number>(0)
        const duration = ref<number>(0)
        return {
            playing,
            list,
            url,
            volume,
            mode,
            index,
            currentTime,
            duration
        }
    },
    {
        persist: {
            key: '__player__',
            paths: []
        }
    }
)
