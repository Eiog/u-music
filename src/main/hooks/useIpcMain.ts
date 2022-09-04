import { app, App, shell, BrowserWindow, ipcMain } from 'electron'
import useTray from './useTray'
const useIpcMain = (app: App, mainWindow: BrowserWindow) => {
    ipcMain.on('mini-window', () => {
        mainWindow?.minimize()
    })
    ipcMain.on('hide-window', () => {
        const { setTray } = useTray(app, mainWindow)
        setTray()
    })
    ipcMain.on('close-window', () => {
        app.quit()
    })
    ipcMain.on('full-screen', (event, val) => {
        mainWindow.setFullScreen(val)
        event.returnValue = mainWindow.fullScreen
    })
    ipcMain.on('full-screen-toggle', () => {
        mainWindow.setFullScreen(!mainWindow.fullScreen)
    })
}
export default useIpcMain