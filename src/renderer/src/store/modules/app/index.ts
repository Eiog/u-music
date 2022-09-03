import { defineStore } from 'pinia'
export const useAppStore = defineStore(
  'appStore',
  () => {
    const count = ref(0)
    const closeByMini = ref<boolean | undefined>(undefined)
    const sideCollapsed = ref(false)
    return {
      count,
      closeByMini,
      sideCollapsed
    }
  },
  {
    persist: {
      key: '__app__',
      paths: ['closeByMini']
    }
  }
)
