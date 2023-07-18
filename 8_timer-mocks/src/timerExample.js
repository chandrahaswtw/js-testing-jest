function timerGame(callback) {
  console.log("Ready....go!");
  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback && callback();
  }, 1000);
}

function doubleTimer(callback) {
  console.log("Ready....go!");
  setTimeout(() => {
    setTimeout(() => {
      callback && callback();
    }, 2000);
  }, 1000);
}

module.exports = { timerGame, doubleTimer };
