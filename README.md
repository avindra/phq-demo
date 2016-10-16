# phq-9 demo

This is a sample React / Redux application which serves to provide the PHQ-9 depression screener, allowing users to self-assess their depression and get recommended treatment options.

# Developing

```
npm run dev
```

# Generate production assets

Production optimizations include:

 * Minification
 * React `propType` removal

```
npm run prod
```

# Filesystem explanation

There are some files used in this project which are non-standard development practices. To prevent confusion, I've documented the purpose of some of these files:

 * `build` A file containing only the hash of the latest production assets to use (if any)
 * `build.js` Core wrapper script which is used to manage webpack during production builds as well as the normal development process.  
 * `src/` All core source code
 * `src/components` React components  