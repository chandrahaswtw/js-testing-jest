const SoundPlayer = require("../src/sound-player");
const SoundPlayerConsumer = require("../src/sound-player-consumer");

jest.mock("../src/sound-player");

// This is a good practice to clear the mocks before each test.
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  SoundPlayer.mockClear();
});

beforeAll(() => {
  SoundPlayer.mockImplementation(() => {
    return {
      playSoundFile: () => {
        throw new Error("Test error");
      },
    };
  });
});

describe("Module factory", () => {
  it("Module factory tests", () => {
    const playerConsumer = new SoundPlayerConsumer();
    // Here we are expecting the entire function to throw error.
    expect(() => playerConsumer.playSomethingCool()).toThrow();
  });
});
