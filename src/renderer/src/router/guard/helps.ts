import { loginApi } from "@@/api"
import { storeToRefs } from "pinia"
import { useAppStore } from "@@/store"
export const checkLogin = async () => {
    const { account, profile } = storeToRefs(useAppStore())
    if (account.value || profile.value) return
    try {
        await loginApi.status()
    } catch (error) {

    }
}