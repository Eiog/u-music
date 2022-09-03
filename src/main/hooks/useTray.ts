import { App, Tray, Menu, BrowserWindow, ipcMain, MenuItem } from 'electron'
import { join } from 'path'
const useTray = (app: App, mainWindow: BrowserWindow) => {
    const trayMenu = [
        {
            label: '显示',
            click: () => {
                mainWindow.show()
            }
        },
        {
            label: '退出',
            click: () => {
                app.quit()
            }
        },
    ]
    const iconPath = join(__dirname, '../../build/icon.png')
    const setTray = () => {
        const appTray = new Tray(iconPath)
        const contextMenu = Menu.buildFromTemplate(trayMenu)
        mainWindow.hide()
        appTray.setToolTip('tooltip')
        appTray.setContextMenu(contextMenu)
        appTray.on('click', () => {
            mainWindow.show()
            appTray.destroy()
        })
    }
    return { setTray }
}
export default useTray