# electron-react-todo

### TODO App in React, Redux and Electron

![alt text](https://raw.githubusercontent.com/subeesh/electron-react-todo/screencast/todo.gif "Todo App")

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

[Node](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) are required to run the program.

```
node >= v7.10.0
npm  >= v4.2.0
```

### Installing

 - Git clone or download the zip file
 - cd into the folder
 - Run npm install

```
npm install
```

### Running the program

To run the production build,

```
npm start
```
To run the program in development mode,

```
npm run dev
```

### Libraries Used

- [React](https://facebook.github.io/react) - View Layer
- [Redux](https://github.com/reactjs/redux) - State Management
- [Electron](https://electron.atom.io/) - Desktop Application Framework
- [Electron Redux](https://github.com/hardchor/electron-redux) - Manage redux state across multiple windows
- [Webpack](https://webpack.js.org/) - Module Bundler
- [todomvc-app-css](https://github.com/tastejs/todomvc-app-css) - CSS Styles
- [Jest](https://github.com/facebook/jest) - Testing framework

The project uses a stripped down version of [electron-react-boilerplate](https://github.com/chentsulin/electron-react-boilerplate) as starting point.

## Testing

### Running the tests

Unit tests are written using [Jest](http://facebook.github.io/jest/). To execute tests, run:

```
npm test
```

💡 To keep Jest running in the background to watch for file changes, run:
```
npm run test-watch
```

### Code Coverage

Jest comes with default code coverage report. The following command generates reports in a folder named coverage in the project directory.

```
npm run coverage
```

### TODO

- Add more tests for the React Components using Jest and [Enzyme](https://github.com/airbnb/enzyme)
- Introduce [ESlint](http://eslint.org/) with [Pretter](https://github.com/prettier/prettier) for code style
- Add packaging option to package the app as executables for Windows and Mac
