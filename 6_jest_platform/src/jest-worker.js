// Module for executing heavy tasks under forked processes in parallel, by providing a Promise based interface, minimum overhead, and bound workers.

const { Worker: JestWorker } = require("jest-worker");

async function main() {
  const worker = new JestWorker(require.resolve("./utils/heavy-task.js"));

  // run 2 tasks in parallel with different arguments
  const results = await Promise.all([
    worker.myHeavyTask({ foo: "bar" }),
    worker.myHeavyTask({ bar: "foo" }),
  ]);

  console.log(results);
}

main();
