const SoundPlayer = require("../src/sound-player");
const SoundPlayerConsumer = require("../src/sound-player-consumer");

const playSoundFileMock = jest
  .spyOn(SoundPlayer.prototype, "playSoundFile")
  .mockImplementation(() => {
    console.log("mocked function");
  }); // comment this line if just want to "spy"

it("player consumer plays music", () => {
  const player = new SoundPlayerConsumer();
  player.playSomethingCool();
  expect(playSoundFileMock).toHaveBeenCalled();
});
