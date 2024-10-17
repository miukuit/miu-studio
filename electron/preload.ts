import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
})