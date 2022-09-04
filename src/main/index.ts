import { app, shell, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import {
  useIpcMain,
  useApp,
  useVueDevTools,
  useStore
} from './hooks'

const init = async () => {
  const { app, mainWindow } = await useApp()
  useVueDevTools(app, mainWindow)
  useIpcMain(app, mainWindow)
  useStore()
}
init()