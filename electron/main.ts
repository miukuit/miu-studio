import { app, ipcMain } from 'electron'

import { mainWindow, createMainWindow } from './windows/main'

app.whenReady().then(() => {
  createMainWindow()
})

ipcMain.on('max-window', () => {
  mainWindow?.minimize()
})