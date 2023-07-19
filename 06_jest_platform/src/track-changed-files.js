// This gives list of all changes files in a path since last commit
// Make sure you point the path where you have .git folder.

const { getChangedFilesForRoots } = require("jest-changed-files");

getChangedFilesForRoots(["./../"], {
  lastCommit: true,
}).then((result) => console.log(result.changedFiles));
