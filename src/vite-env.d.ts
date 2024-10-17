/// <reference types="vite/client" />

export interface electronApi {
  send: (channel: string, ...args: any[]) => void;
}

declare global {
  interface Window {
    electron?: electronApi;
  }
}