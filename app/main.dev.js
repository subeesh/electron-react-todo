import { app, screen, BrowserWindow } from "electron";
import {
  forwardToRenderer,
  triggerAlias,
  replayActionMain
} from "electron-redux";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import initialState from "./store/initialState";

const store = createStore(
  rootReducer,
  initialState, // optional
  applyMiddleware(
    triggerAlias, // optional, see below
    forwardToRenderer // IMPORTANT! This goes last
  )
);

replayActionMain(store);

if (process.env.NODE_ENV === "production") {
  const sourceMapSupport = require("source-map-support");
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === "development" ||
  process.env.DEBUG_PROD === "true"
) {
  require("electron-debug")();
  const path = require("path");
  const p = path.join(__dirname, "..", "app", "node_modules");
  require("module").globalPaths.push(p);
}

const installExtensions = async () => {
  const installer = require("electron-devtools-installer");
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ["REACT_DEVELOPER_TOOLS", "REDUX_DEVTOOLS"];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 * Add event listeners...
 */

app.on("window-all-closed", () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== "darwin") {
    app.quit();
  }
});

const windows = new Set();

const createWindow = (xPos, yPos, width, height) => {
  let newWindow = new BrowserWindow({
    show: false,
    width: width,
    height: height,
    x: xPos,
    y: yPos,
    minWidth: 400,
    maxWidth: 500,
    title: "TODO App"
  });

  newWindow.loadURL(`file://${__dirname}/app.html`);
  windows.add(newWindow);

  newWindow.webContents.on("did-finish-load", () => {
    if (!newWindow) {
      throw new Error('"newWindow" is not defined');
    }
    newWindow.show();
    newWindow.focus();
  });

  newWindow.on("closed", () => {
    windows.delete(newWindow);
    newWindow = null;
  });
};

app.on("ready", async () => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.DEBUG_PROD === "true"
  ) {
    await installExtensions();
  }

  const windowWidth = 400;

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const windowHeight = height - 150;
  const numWindows = 3;
  const emptySpace = width - windowWidth * numWindows;
  const offset = emptySpace ? emptySpace / numWindows : 10;

  let x = offset / 2;
  const y = (height - windowHeight) / 2;
  for (let i = 0; i < numWindows; i++) {
    createWindow(x, y, windowWidth, windowHeight);
    x = x + offset + windowWidth;
  }
});
