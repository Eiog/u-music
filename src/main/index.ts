import { app, shell, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { useTray, useIpcMain, useWindow, useApp, useApi } from './hooks'

const init = async () => {
  const { app, mainWindow } = await useApp(useWindow)
  useIpcMain(app, mainWindow)
  useApi(app, mainWindow)
}
init()