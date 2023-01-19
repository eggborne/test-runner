function runTests(testsObject) {
  for (functionName in testsObject) {
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expected) {
        console.log(testEntry.description, 'PASSED')
      } else {
        console.error(testEntry.description, 'FAILED');
        console.warn('expected output:', testEntry.expected);
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
      description: "It recognizes a single vowel.",
      code: () => vowelCounter('a'),
      expected: 1
    },
    {
      description: "It recognizes a single vowel regardless of case.",
      code: () => vowelCounter('A'),
      expected: 1
    },
    {
      description: "It recognizes a single vowel in a word with multiple characters.",
      code: () => vowelCounter('cat'),
      expected: 1
    },
    {
      description: "It recognizes multiple vowels in a single word.",
      code: () => vowelCounter('cater'),
      expected: 2
    },
    {
      description: "It recognizes vowels in a multiple-word sentence.",
      code: () => vowelCounter('cats catered the event'),
      expected: 7
    },
    {
      description: "It recognizes vowels in a multiple word sentence regardless of capitalization.",
      code: () => vowelCounter('CATS CATERED THE EVENT'),
      expected: 7
    },
    {
      description: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization.",
      code: () => vowelCounter('CaTS CATEReD ThE EveNT'),
      expected: 7
    },
    {
      description: "It ignores non-alphabetical characters since they can't be vowels.",
      code: () => vowelCounter('*&$92%'),
      expected: 0
    },
  ],
}