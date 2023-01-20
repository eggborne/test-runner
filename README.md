# Test Runner

### How to Use:

1. Download the file **testrunner.js** from this repository
2. Refer to the file in the **\<HEAD\>** of your **index.html**
3. Edit **testrunner.js** to include your own tests by adding an object in with following format:
```
yourTestsObject = {
  firstFunctionToTest: [
    {
      description: "It tests to see if firstFunctionToTest works correctly with argument(s) arg1ForTest1.",
      code: () => firstFunctionToTest(arg1ForTest1),
      expected: // the correct output for argument arg1forTest1
    },
    {
      description: "It tests to see if firstFunctionToTest works correctly with argument(s) arg2ForTest1.",
      code: () => firstFunctionToTest(arg2ForTest1),
      expected: // the correct output for argument arg2ForTest1
    },
    // etc.
  ],
  secondFunctionToTest: [
    {
      description: "It tests to see if secondFunctionToTest works correctly with argument(s) arg1ForTest2.",
      code: () => secondFunctionToTest(arg1ForTest2),
      expected: // the correct output for argument arg1forTest2
    },
    // etc.
  ],
  // etc.
}
```
4. Call **runTests(functionToTest)** in the terminal or within your program.