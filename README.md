# Chrome Extension Template

Template for build the chrome extension from scratch.

## Getting Started

To get started with the Chrome extension, simply download it from the Chrome Web Store. Once the installation is complete, you'll see an icon appear in the upper-right corner of your browser window. That means you're all set to start using the extension!

## Features

With this extension, you'll be able to:
  * Feature 1;
  * Feature 2;
  * ...

## Build production version

To build the project, follow these steps:

  1. Open the terminal and navigate to the project's root directory;
  2. Run `yarn install` to install all the necessary dependencies for the build script;
  3. Run `yarn build`;
  4. If the build is successful, you should see new directory: `/packages` with file  `chrome-extension-template-x.x.xx.zip`. The `x.x.xx` part of the latter file name will correspond to the current version number.

## Build dev version

If you'd like to build the development version of the project, follow these steps:

  1. Navigate to the project's root directory in the terminal;
  2. Install all the necessary dependencies for the build script by running `yarn install`;
  3. Run `yarn build:dev`;
  4. You should see the `/dist` folder created during the process;
  5. Load the extension from the `/dist` folder.

## Load dev version

If you want to load the dev version of a Chrome extension, follow these steps:

  1. Open Google Chrome on your computer.
  2. Click on the three dots in the top right-hand corner of the browser window to open the Chrome menu.
  3. Select "More tools" from the menu.
  4. Click on "Extensions" from the "More tools" submenu.
  5. Enable "Developer mode" by clicking the toggle switch in the top right-hand corner of the "Extensions" page.
  6. Click on "Load unpacked" button in the top left-hand corner of the "Extensions" page.
  7. Navigate to the folder where you have saved the dev version of the Chrome extension on your computer.
  8. Select the folder containing the extension and click "OK" to load it into Chrome.

That's it! The dev version of the Chrome extension should now be loaded in your browser. If you encounter any issues or errors, make sure to check the developer console for more information.

## Publishing the extension in Chrome Webstore

To publish the extension in the Chrome Web Store, follow these steps:

  1. Visit https://chrome.google.com/webstore/developer/dashboard;
  2. If you haven't published an extension before, you'll need to pay a $5 fee;
  3. Click on "Add new item.";
  4. Upload `/packages/chrome-extension-template-x.x.xx.zip`;
  5. Add a description, icon, and screenshots;
  6. Click on "Publish changes."

## Increase version number

If you'd like to increase the version number, follow these steps:

  1. Open the terminal in the project's root directory;
  2. To increase the major version number, run `yarn version:major`;
  3. To increase the minor version number, run `yarn version:minor`;
  4. To increase the patch version number, run `yarn version:patch`.

## Set release tag

If you'd like set release tag, follow these steps:

  1. Open the terminal in the project's root directory;
  2. Run `yarn version:tag`.

## Built With

  * [React](https://reactjs.org/)
  * [WebPack](https://webpack.js.org/)
  * [Material-UI](https://mui.com/)
  * [TanStackQuery](https://tanstack.com/)

## License

BSD 3-Clause License
