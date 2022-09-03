import { app, shell, BrowserWindow, ipcMain } from 'electron'
import * as path from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { useTray, useIpcMain, useWindow, useApp, useApi, useVueDevTools } from './hooks'

const init = async () => {
  const { app, mainWindow } = await useApp()
  useVueDevTools(app, mainWindow)
  useIpcMain(app, mainWindow)
  useApi(app, mainWindow)
}
init()