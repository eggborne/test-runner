# Test Runner

### How to Use:

1. Download the file `testrunner.js` from this repository
2. Refer to the file in the `<HEAD>` of your `index.html`
3. Edit `testrunner.js` to include your own tests by adding an object with the following format:
```
const yourTestsObject = {

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
4. Call `runTests(yourTestsObject)` in the terminal or within your program. Results are printed to the console.

> `runTests` also returns a boolean indicating whether **all tests** were passed.

### Options
A second argument can be passed to `runTests()` as follows:

```
runTests(yourTestsObject, {
  failuresOnly,
  fancy,
  keepConsole
});
```

| option | type | default | description 
| ------ | ------ | ------ | ------
| `failuresOnly` | boolean | `false` | Minimal output, only lists failing tests
| `fancy` | boolean | `true` | Produces fancy CSS-styled console messages
| `keepConsole` | boolean | `false` | Retains console contents when logging results