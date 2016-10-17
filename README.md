# phq-9 demo

This is a sample React / Redux application which serves to provide the PHQ-9 depression screener, allowing users to self-assess their depression and get recommended treatment options.

# Approach

The approach used here should enable developers to use JavaScript (including the latest spec), on the entire stack. The application state should be accessible from both client and server code.

This demo uses two packages which are currently in alpha (`koa` and `react-router`). This is not a recommended practice for writing code that is used in production. Alpha versions are used here as an exercise of using some of the latest in front end technology.

I have opted out of using the `actions/` pattern in redux, in the interest of time.

`material-ui` is used as the base layout / component framework.

# Features

 * Navigation (go back to edit a question)
 * Exit at will (server will preserve the state of your entire session)
 * Good user experience for both the developer and the end-user

# Developing

```
npm run dev
```

# Production run

Production optimizations include:

 * Minification
 * React `propType` removal

```
npm start
```

# Filesystem explanation

There are some files used in this project which are non-standard development practices. To prevent confusion, I've documented the purpose of some of these files:

 * `build` A file containing only the hash of the latest production assets to use (if any)
 * `build.js` Core wrapper script which is used to manage webpack during production builds as well as the normal development process.  
 * `src/` All core source code
 * `src/components` React components


# Improvements

This is a demo project that was made as a weekend one shot. It can be improved in a number of ways:

 * Add animations
 * Improve CSS build process (extract styles into a bundled stylesheet, use preprocessor, etc)
