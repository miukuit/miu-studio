
import type { ForgeConfig } from '@electron-forge/shared-types';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { FuseV1Options, FuseVersion } from '@electron/fuses';
import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerSquirrel } from '@electron-forge/maker-squirrel';
import { MakerZIP } from '@electron-forge/maker-zip';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { VitePlugin } from '@electron-forge/plugin-vite'

const config: ForgeConfig = {
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    new MakerSquirrel({
      authors: 'Electron contributors'
    }, ['win32']),
    new MakerZIP({}, ['darwin']),
    new MakerDeb({}, ['linux']),
    new MakerRpm({}, ['linux']),
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    new VitePlugin({
      // `build` can specify multiple entry builds, which can be
      // Main process, Preload scripts, Worker process, etc.
      build: [
        {
          // `entry` is an alias for `build.lib.entry`
          // in the corresponding file of `config`.
          entry: 'electron/main.ts',
          config: 'vite.main.config.ts',
        },
        {
          entry: 'electron/preload.ts',
          config: 'vite.preload.config.ts',
        },
      ],
      renderer: [
        {
          name: 'main_window',
          config: 'vite.config.ts',
        },
      ],
    }),
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};

export default config;
