function runTests(testsObject, failuresOnly) {
  let failures = 0;
  console.log(`%c TESTING ${Object.keys(testsObject).length} FUNCTIONS...       `, 'color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem;')

  for (functionName in testsObject) {
    !failuresOnly ? console.warn(`%c ${functionName}`, `font-size: 1.1rem`) : null;
    let passed = 0;
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expected) {
        !failuresOnly ? console.log(`%c ${functionName}: ${testEntry.description} PASSED `, `color: white; background-color: #00aa0022`) : null;
        passed++;
      } else {
        failures++;
        console.error(`%c${functionName}: ${testEntry.description} FAILED `, `color: white; font-size: 1.05rem;`);
        console.warn(`%c expected output: ${testEntry.expected} `, `color: white; font-size: 1.05rem`);
        console.warn(`%c actual output: ${testResult} `, `color: white; font-size: 1.05rem`);
      };
    })
    let totalTests = testsObject[functionName].length;
    if (!failuresOnly && passed === totalTests) {
      console.log(`%c ${passed}/${totalTests} PASSED FOR ${functionName} `, 'color: white; background-color: #00aa0022; font-size: 1.1rem; padding: 0.1rem');
    }
  }
  if (!failures) {
    console.log('%c ALL TESTS PASSED!            ', 'color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem;');
  } else {
    console.error(`%c ${failures} TEST${failures > 1 ? 'S' : ''} FAILED. `, 'color: white; background-color: red; font-size: 1.1rem; padding: 0.5rem;')
  }
}

// sample functions

function vowelCounter(word) {
  let vowelCount = 0;
  word.split('').forEach(letter => {
    if ('aeiou'.includes(letter.toLowerCase())) {
      vowelCount++
    }
  })
  return vowelCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// sample tests object

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
  numberOfOccurrencesInText: [
    {
      description: "It should return 0 occurrences of a word for an empty string.",
      code: () => numberOfOccurrencesInText('red', ''),
      expected: 0
    },
    {
      description: "It should return 1 occurrence of a word when the word and the text are the same.",
      code: () => numberOfOccurrencesInText('red', 'red'),
      expected: 1
    },
    {
      description: "It should return 0 occurrences of a word when the word and the text are different.",
      code: () => numberOfOccurrencesInText('blue', 'red'),
      expected: 0
    },
    {
      description: "It should return the number of occurrences of a word.",
      code: () => numberOfOccurrencesInText('red', 'red blue red red red green'),
      expected: 4
    },
    {
      description: "It should return a word match regardless of case.",
      code: () => numberOfOccurrencesInText('Red', 'red RED Red green Green GREEN'),
      expected: 3
    },
    {
      description: "It should return a word match regardless of punctuation.",
      code: () => numberOfOccurrencesInText('Red', 'Red! Red. I like red, green, and yellow.'),
      expected: 3
    },
  ],
}