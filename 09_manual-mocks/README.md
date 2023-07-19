# MANUAL MOCKS

In this folder all the tests are part of **tests** folder in the root.

## Local module mocks

We need to create the mock file in the same root directory of the file we intend to mock. For user, we created \_\_mocks\_\_ folder(Double underscore on both sides and is case-sensitive) and just have the same filename as the original file.

## Node module mocks

We need to place the \_\_mocks\_\_ folder in the same level as node_modules and place the corresponding fileName.js there. The fileName is the name of nodemodule we want to mock.

In the example mentioned, we tried to mock lodash.

## Bluntly mock everything

As we discussed in **4_mock-functions** mockModule.test.js and mockAxios.test.js we can mock entirely. This module is selective way of doing the mocks.
