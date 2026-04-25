const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");

const isWidgetMode = process.argv.includes("--widget");
const appIcon = path.join(__dirname, "build", "icon.ico");

function createWindow() {
  const windowOptions = isWidgetMode
    ? {
        width: 420,
        height: 760,
        minWidth: 360,
        minHeight: 520,
        frame: true,
        alwaysOnTop: true,
        title: "Yu-Gi-Oh Tools Widget",
        backgroundColor: "#050913"
      }
    : {
        width: 1280,
        height: 900,
        minWidth: 980,
        minHeight: 680,
        title: "Yu-Gi-Oh Tools",
        backgroundColor: "#050913"
      };

  const win = new BrowserWindow({
    ...windowOptions,
    icon: appIcon,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith("file://")) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
