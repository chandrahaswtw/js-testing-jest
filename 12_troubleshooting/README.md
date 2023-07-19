# TROUBLESHOOTING

## STEP 1

Add the folder `.vscode` in the root and paste the `lauch.json` in your folder

## STEP 2

Execute the following command:

WINDOWS MACHINE:

```
node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand
```

LINUX MACHINE:

```
node --inspect-brk node_modules/.bin/jest --runInBand
```

## STEP 3

Open `run and debug` on vscode and hit play button. It should stop whereever we added the break point.

#### NOTE

Open this as standalone folder. Make sure .vscode folder should stay in the root.
