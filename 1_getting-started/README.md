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

```npm test``` should test all the .test.js in files in the entire repo.

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
In our case we can just run, it picks up ```sum.test.js``` file and runs it. ```--notify``` gives a notification when the test ran.
```
jest sum --notify
```
## Project configuration file

```
jest --init
```

This asks a few questions:
- What test environment you want for testing - Choose jsdom for example and so on.

This finally creates a jest.config.json where we can do extra configuration 

## Increase timeout

```
jest.setTimeout(30000);
```



