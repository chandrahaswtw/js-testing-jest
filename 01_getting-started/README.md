# JEST INTRODUCTION

## Installation

```
npm install --save-dev jest
```

Change package.json as below:

```
"scripts": {
    "test": "jest"
 }
```

`npm test` should test all the .test.js in files in the entire repo.

## Run test from command line

We need to install jest globally as below:

```
npm install jest --global
```

To run all tests we can use just

```
jest
```

Now we need to run a specific test we can run below (basic syntax)

```
jest my-test --notify --config=config.json
```

In our case we can just run, it picks up `sum.test.js` file and runs it. `--notify` gives a notification when the test ran.

```
jest sum --notify
```

## Project configuration file

```
jest --init
```

This asks a few questions:

- What test environment you want for testing (between node and jsdom) - Choose jsdom for example and so on.
- Don't use ts if you are willing to choose js.
- Use v8 as provider that should be used to instrument code for coverage.

This finally creates a jest.config.json where we can do extra configuration.

Now to run the test, just writing jusy `jest` will not work, throws an error as `SecurityError: localStorage is not available for opaque origins`. So we do as below, we can run it directly or add as a script in package.json

```
jest --env=node
```

## Increase timeout

```
jest.setTimeout(30000);
```

## Run jest in watch mode

```
jest --watch
```

## Run only one test suite/test

Use `describe.only` to run that particular test suite and `it.only` to run only that particular test. This only works for tests in a single file but not for all the files.
