import { app } from 'electron'

import { createLoginWindow } from './windows/login'

app.whenReady().then(() => {
  createLoginWindow()
})
