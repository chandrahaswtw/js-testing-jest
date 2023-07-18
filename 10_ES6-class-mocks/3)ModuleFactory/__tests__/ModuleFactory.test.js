const SoundPlayer = require("../src/sound-player");
const SoundPlayerConsumer = require("../src/sound-player-consumer");

// Make sure to have file name start with mock --> mockPlaySoundFile
// While mocking return the jest.fn().....
const mockPlaySoundFile = jest.fn();
jest.mock("../src/sound-player", () => {
  return jest.fn().mockImplementation(() => {
    return { playSoundFile: mockPlaySoundFile };
  });
});

// This is a good practice to clear the mocks before each test.
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

describe("Module factory", () => {
  it("Module factory tests", () => {
    const playerConsumer = new SoundPlayerConsumer();
    playerConsumer.playSomethingCool();
    expect(mockPlaySoundFile).toHaveBeenCalledWith("song.mp3");
  });
});
