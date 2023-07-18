const SoundPlayer = require("../src/sound-player");
const { mockPlaySoundFile } = require("../src/sound-player");
const SoundPlayerConsumer = require("../src/sound-player-consumer");

// Mention outside describe
// SoundPlayer is now a mock constructor
jest.mock("./../src/sound-player");

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

describe("Manual mocks", () => {
  it("We can check if the consumer called the class constructor", () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toHaveBeenCalledTimes(1);
  });

  it("test", () => {
    const soundPlayerConsumer = new SoundPlayerConsumer();
    soundPlayerConsumer.playSomethingCool();
    expect(mockPlaySoundFile).toHaveBeenCalledWith("song.mp3");
  });
});
