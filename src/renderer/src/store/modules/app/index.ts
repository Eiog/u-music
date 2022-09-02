import { defineStore } from 'pinia'
export const useAppStore = defineStore(
  'appStore',
  () => {
    const count = ref(0)
    const closeByMini = ref<boolean|undefined>(undefined)
    return {
      count,
      closeByMini
    }
  },
  {
    persist: {
      key: '__app__',
      paths: ['closeByMini']
    }
  }
)
