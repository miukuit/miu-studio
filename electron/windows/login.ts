import path from 'path'
import { BrowserWindow } from 'electron'

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;

export let loginWindos: BrowserWindow | null = null
export const createLoginWindow = async () => {
  loginWindos = new BrowserWindow({
    width: 320,
    height: 450,
    center: true,
    frame: false,
    resizable: false, // 不可手动调整大小
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
    }
  })
  console.log(MAIN_WINDOW_VITE_DEV_SERVER_URL)
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    loginWindos.loadURL(`${MAIN_WINDOW_VITE_DEV_SERVER_URL}/login`)
    loginWindos.webContents.openDevTools()
  } else {
    loginWindos.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html/login`),
    );
  }
}