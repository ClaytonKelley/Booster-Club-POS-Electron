// electron.cjs
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 2560,
    height: 1440,
    webPreferences: {
       preload: path.join(__dirname, 'preload.js'), // optional
    },
  });

  win.loadURL('http://localhost:5173');
}

app.whenReady().then(() => {
  console.log('✅ Electron app ready');
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
