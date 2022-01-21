if (process.env.VITE_APP_VERSION === undefined) {
  const now = new Date()
  process.env.VITE_APP_VERSION = `${now.getUTCFullYear() - 2000}.${
    now.getUTCMonth() + 1
  }.${now.getUTCDate()}-${now.getUTCHours() * 60 + now.getUTCMinutes()}`
}

/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'KeenOA',
  copyright: 'Copyright©2028JJLDxz',
  appId: 'com.jjldxz.meeting',
  compression: 'store',
  npmRebuild: false,
  artifactName: '${productName}-${os}-${arch}.${ext}',
  protocols: {
    name: 'keen',
    schemes: ['keen']
  },
  // asar: false,
  asar: {
    smartUnpack: true
  },
  directories: {
    output: 'dist',
    buildResources: 'buildResources'
  },
  files: ['dist/**'],
  extraMetadata: {
    version: process.env.VITE_APP_VERSION
  },
  mac: {
    target: ['dmg']
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['x64']
      }
    ]
  },
  dmg: {
    title: 'KeenOA'
  },
  nsis: {
    oneClick: false,
    perMachine: false,
    allowToChangeInstallationDirectory: true,
    deleteAppDataOnUninstall: false
  }
}

module.exports = config
