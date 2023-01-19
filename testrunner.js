function runTests(testsObject) {
  for (functionName in testsObject) {
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expectedOutput) {
        console.log(testEntry.testDescription, 'PASSED')
      } else {
        console.error(testEntry.testDescription, 'FAILED');
        console.warn('expected output:', testEntry.expectedOutput);
        console.warn('actual output:', testResult);

      };
    })
  }
}

function vowelCounter(word) {
  let vowelCount = 0;
  word.split('').forEach(letter => {
    if ('aeiou'.includes(letter.toLowerCase())) {
      vowelCount++
    }
  })
  return vowelCount;
}

sampleTestsObject = {
  vowelCounter: [
    {
      testDescription: "It recognizes a single vowel.",
      code: () => vowelCounter('a'),
      expectedOutput: 1
    },
    {
      testDescription: "It recognizes a single vowel regardless of case.",
      code: () => vowelCounter('A'),
      expectedOutput: 1
    },
    {
      testDescription: "It recognizes a single vowel in a word with multiple characters.",
      code: () => vowelCounter('cat'),
      expectedOutput: 1
    },
    {
      testDescription: "It recognizes multiple vowels in a single word.",
      code: () => vowelCounter('cater'),
      expectedOutput: 2
    },
    {
      testDescription: "It recognizes vowels in a multiple-word sentence.",
      code: () => vowelCounter('cats catered the event'),
      expectedOutput: 7
    },
    {
      testDescription: "It recognizes vowels in a multiple word sentence regardless of capitalization.",
      code: () => vowelCounter('CATS CATERED THE EVENT'),
      expectedOutput: 7
    },
    {
      testDescription: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization.",
      code: () => vowelCounter('CaTS CATEReD ThE EveNT'),
      expectedOutput: 7
    },
    {
      testDescription: "It ignores non-alphabetical characters since they can't be vowels.",
      code: () => vowelCounter('*&$92%'),
      expectedOutput: 0
    },
  ],
}