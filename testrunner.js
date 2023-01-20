function runTests(testsObject, failuresOnly) {
  let failures = 0;
  for (functionName in testsObject) {
    console.log('------- TESTING', functionName);
    testsObject[functionName].forEach(testEntry => {
      let testResult = testEntry.code();
      if (testResult === testEntry.expected) {
        !failuresOnly ? console.log(testEntry.description, 'PASSED') : null;
      } else {
        failures++;
        console.error(testEntry.description, 'FAILED');
        console.warn('expected output:', testEntry.expected);
        console.warn('actual output:', testResult);
      };
    })
  }
  if (!failures) {
    console.log('\nALL TESTS PASSED!')
    console.log('\n')
  } else {
    console.error('\n' + failures + ' TESTS FAILED.')
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