import { defineStore } from 'pinia'
import { StatusResult } from '@@/api'
export const useAppStore = defineStore(
  'appStore',
  () => {
    const count = ref(0)
    const closeByMini = ref<boolean | undefined>(undefined)
    const sideCollapsed = ref(false)
    const account = ref<StatusResult['account']>()
    const profile = ref<StatusResult['profile']>()
    const cookie = ref('')
    const playerShow = ref(false)
    return {
      count,
      closeByMini,
      sideCollapsed,
      account,
      profile,
      cookie,
      playerShow
    }
  },
  {
    persist: {
      key: '__app__',
      paths: ['closeByMini', 'cookie']
    }
  }
)
