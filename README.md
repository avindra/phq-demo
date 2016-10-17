# phq-9 demo

This is a sample React / Redux application which serves to provide the PHQ-9 depression screener, allowing users to self-assess their depression and get recommended treatment options.

# Approach

The approach used here should enable the team working on this app to use JavaScript (including the latest spec), on the entire stack. The application state should be accessible from both client and server code.

This demo uses two packages which are currently in alpha (`koa` and `react-router`). This is not a recommended practice for writing code to be used in production. Alpha versions are used here as an exercise of using some of the latest in front end technology.

I have opted out of using the `actions/` pattern in redux, in the interest of time.

# Features

 * Navigation (go back to edit a question)
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


# Todo

These are some things that can be done to improve the quality of this project:

 * Add animations
 * Improve CSS build process (extract styles into a bundled stylesheet, minify, autoprefix, use preprocessor, etc)
 * Add unit tests + CI
