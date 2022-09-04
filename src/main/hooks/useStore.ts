import Store from 'electron-store'
import { ipcMain } from 'electron'

const useStore = () => {
    const store = new Store()
    ipcMain.on('getStore', async (event, value) => {
        event.returnValue = store.get(value) || []
    })
    ipcMain.on('setStore', async (event, key, value) => {
        store.set(key, value)
    })
    ipcMain.on('hasStore', async (event, key) => {
        event.returnValue = store.has(key)
    })
    ipcMain.on('deleteStore', async (event, key) => {
        store.delete(key)
    })
    ipcMain.on('clearStore', async (event) => {
        store.clear()
    })

}
export default useStore