"use strict";

import renderer from "react-test-renderer";
import Link from "../Link";

// NOTES:
// When this test ran for the first time, it creates a snapshot under the __snapshots_ (Testfilename.snap).
// Next time when we run the test again, it checks with the snapshot.
// If there is any changes in the test and wanted to update ALL the snapshots, we need to run "jest --updateSnapshot" or "npm test --updateSnapshot"
// If we just wanted to update snap shot of a few tests with a pattern, --testNamePattern correctly (any test with correctly, the snapshots gets updated).
// Snapshots need to be preserved --> git or somewhere to run future tests.

// CHECKING WITH CREATED SNAPSHOTS
it("renders correctly", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// CHECKING WITH INLINE SNAPSHOTS
// No snapshot file gets created for this type, but we need to pass a snapshot to test.
it("Inline snapshots renders correctly", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  const tree = component.toJSON();
  expect(tree).toMatchInlineSnapshot(`
  <a
    className="normal"
    href="http://www.facebook.com"
    onMouseEnter={[Function]}
    onMouseLeave={[Function]}
  >
    Facebook
  </a>
  `);
});

// Snapshots that change constantly, we cannot hardcode, so we use expect.any()
// Still not the best practice, see the following example
it("will check the matchers and pass", () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// Snapshots that change constantly, we cannot hardcode, so we use expect.any()
// We mocked the date and thus returns the standard values each time.
it("will check the matchers and pass - Updated", () => {
  Date.now = jest.fn(() => 422);
  Math.random = jest.fn(() => 22);

  const user = {
    createdAt: Date.now(),
    id: Math.floor(Math.random() * 20),
    name: "LeBron James",
  };

  expect(user).toMatchSnapshot({
    createdAt: 422,
    id: 440,
    name: "LeBron James",
  });
});
