import { app, App, shell, BrowserWindow, ipcMain } from 'electron'
import * as api from '../api'
const useApi = (app: App, mainWindow: BrowserWindow) => {
    ipcMain.handle('request-api', async (event, args) => {
        const apiName = args[0] as string
        const param = args[1] as any

        return await api[apiName](param)
    })
}
export default useApi