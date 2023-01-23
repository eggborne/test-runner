const defaultOptions = {
  failuresOnly: false,
  fancy: true,
  keepConsole: false,
}

function runTests(testsObject, options=defaultOptions) {
  let startedAt = performance.now();
  !options.keepConsole && console.clear();
  let failures = 0;
  console.log(`%cTESTING ${Object.keys(testsObject).length} FUNCTIONS...       `, options.fancy && `color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem 1rem;`);
  for (functionName in testsObject) {
    let totalTests = testsObject[functionName].length;
    !options.failuresOnly && console.warn(`%c ${functionName}: ${totalTests} TESTS`, options.fancy && `font-size: 1.1rem`);
    let passed = 0;
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expected) {
        !options.failuresOnly && console.log(`%c${functionName}: ${testEntry.description} PASSED `, options.fancy && `padding: 0.5rem; color: white; background-color: #00aa00aa`);
        passed++;
      } else {
        failures++;
        console.error(`%c${functionName}: ${testEntry.description} FAILED `, options.fancy && `color: white; background-color: #aa0000bb; font-size: 1rem;`);
        console.warn(`%c expected output: ${testEntry.expected} `, options.fancy && `font-size: 1.05rem`);
        console.warn(`%c actual output: ${testResult} `, options.fancy && `font-size: 1.05rem`);
      };
    })
    if (passed === totalTests) {
      !options.failuresOnly && console.log(`%c ${passed}/${totalTests} PASSED FOR ${functionName} `, options.fancy && `color: white; background-color: #00aa00; font-size: 1.1rem; padding: 0.1rem`);
    } else {
      !options.failuresOnly && console.log(`%c ${passed}/${totalTests} PASSED FOR ${functionName} `, options.fancy && `color: white; background-color: #aa0000bb; font-size: 1.1rem; padding: 0.1rem`);
    }
  }
  if (!failures) {
    console.log(`%cALL TESTS PASSED!            `, options.fancy && `color: white; background-color: green; font-size: 1.25rem; padding: 0.5rem 1rem;`);
  } else {
    console.error(`%c ${failures} TEST${failures > 1 ? `S` : ``} FAILED.             `, options.fancy && `color: #eee; background-color: #aa0000; font-size: 1.1rem; padding: 0.5rem 1rem;`)
  }
  !options.failuresOnly && console.log(`took ${parseFloat((performance.now() - startedAt).toFixed(3))} ms`)
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
      expected: 10
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