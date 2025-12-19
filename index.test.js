const {
  pluralize,
  uppercase,
  longWords,
  oddLength,
  longToShort,
  noVowel,
  allFour,
  sum,
  evenNumbers,
  oddJob,
  updateLanguage,
  orderedAlumni,
  averageAge,
  ninetiesBabies,
  allUseJavaScript,
} = require('./index');

// Test data
const animals = ['cheetah', 'dog', 'cat', 'dodobird', 'bear', 'dolphin'];
const numbers = [22, 15, 1114, 416, 37, 4];
const alumni = [
  { name: 'Ana', job: 'UBS', language: 'JavaScript', age: 24 },
  { name: 'Stephanie', job: 'JPMorgan', language: 'JavaScript', age: 25 },
  { name: 'Devonte', job: 'SqaureSpace', language: 'JavaScript', age: 27 },
  { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 25 },
  { name: 'Randy', job: 'Palo Alto', language: 'JavaScript', age: 23 },
  { name: 'Azim', job: ' UBS', language: 'JavaScript', age: 25 },
  { name: 'Melissa', job: 'NYT', language: 'JavaScript', age: 27 },
];

describe('Higher Order Functions - Animals Array (Questions 1-7)', () => {
  describe('1. pluralize', () => {
    test('should pluralize all words in the array', () => {
      const result = pluralize(animals);
      expect(result).toEqual(['cheetahs', 'dogs', 'cats', 'dodobirds', 'bears', 'dolphins']);
    });

    test('should return an array of the same length', () => {
      const result = pluralize(animals);
      expect(result.length).toBe(animals.length);
    });

    test('should not mutate the original array', () => {
      const original = [...animals];
      pluralize(animals);
      expect(animals).toEqual(original);
    });
  });

  describe('2. uppercase', () => {
    test('should capitalize the first letter of each string', () => {
      const result = uppercase(animals);
      expect(result).toEqual(['Cheetah', 'Dog', 'Cat', 'Dodobird', 'Bear', 'Dolphin']);
    });

    test('should return an array of the same length', () => {
      const result = uppercase(animals);
      expect(result.length).toBe(animals.length);
    });
  });

  describe('3. longWords', () => {
    test('should return only strings with more than 3 letters', () => {
      const result = longWords(animals);
      expect(result).toEqual(['cheetah', 'dodobird', 'bear', 'dolphin']);
    });

    test('should not include words with 3 or fewer letters', () => {
      const result = longWords(animals);
      expect(result).not.toContain('dog');
      expect(result).not.toContain('cat');
    });
  });

  describe('4. oddLength', () => {
    test('should return only words with odd number of characters', () => {
      const result = oddLength(animals);
      expect(result).toEqual(['cheetah', 'dog', 'cat', 'dolphin']);
    });

    test('should not include words with even number of characters', () => {
      const result = oddLength(animals);
      expect(result).not.toContain('bear');
      expect(result).not.toContain('dodobird');
    });
  });

  describe('5. longToShort', () => {
    test('should sort strings by length from greatest to least', () => {
      const result = longToShort(animals);
      // When lengths are equal, original order is preserved
      expect(result).toEqual(['dodobird', 'cheetah', 'dolphin', 'bear', 'dog', 'cat']);
    });

    test('should not mutate the original array', () => {
      const original = [...animals];
      longToShort(animals);
      expect(animals).toEqual(original);
    });
  });

  describe('6. noVowel', () => {
    test('should replace all vowels with x', () => {
      const result = noVowel(animals);
      expect(result).toEqual(['chxxtxh', 'dxg', 'cxt', 'dxdxbxrd', 'bxxr', 'dxlphxn']);
    });

    test('should handle uppercase and lowercase vowels', () => {
      const testArray = ['Apple', 'Elephant'];
      const result = noVowel(testArray);
      expect(result).toEqual(['xpplx', 'xlxphxnt']);
    });
  });

  describe('7. allFour', () => {
    test('should return false if not all strings are length 4', () => {
      expect(allFour(animals)).toBe(false);
    });

    test('should return true if all strings are length 4', () => {
      const testArray = ['test', 'word', 'four', 'five'];
      expect(allFour(testArray)).toBe(true);
    });

    test('should return false if any string is not length 4', () => {
      const testArray = ['test', 'word', 'four', 'five', 'extra'];
      expect(allFour(testArray)).toBe(false);
    });
  });
});

describe('Higher Order Functions - Numbers Array (Questions 8-9)', () => {
  describe('8. sum', () => {
    test('should return the sum of all numbers', () => {
      expect(sum(numbers)).toBe(1608);
    });

    test('should return 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(sum([1, -2, 3])).toBe(2);
    });
  });

  describe('9. evenNumbers', () => {
    test('should return only even numbers', () => {
      const result = evenNumbers(numbers);
      expect(result).toEqual([22, 1114, 416, 4]);
    });

    test('should not include odd numbers', () => {
      const result = evenNumbers(numbers);
      expect(result).not.toContain(15);
      expect(result).not.toContain(37);
    });

    test('should return empty array if no even numbers', () => {
      expect(evenNumbers([1, 3, 5, 7])).toEqual([]);
    });
  });
});

describe('Higher Order Functions - Alumni Array (Questions 10-15)', () => {
  describe('10. oddJob', () => {
    test('should return objects where job length is odd', () => {
      const result = oddJob(alumni);
      // UBS has length 3 (odd), JPMorgan has length 8 (even), etc.
      expect(result.length).toBeGreaterThan(0);
      result.forEach(obj => {
        expect(obj.job.trim().length % 2).toBe(1);
      });
    });

    test('should handle jobs with leading spaces', () => {
      const result = oddJob(alumni);
      // ' UBS' should be trimmed and considered
      const ubsPerson = result.find(obj => obj.job.includes('UBS'));
      if (ubsPerson) {
        expect(ubsPerson.job.trim().length % 2).toBe(1);
      }
    });
  });

  describe('11. updateLanguage', () => {
    test('should update JavaScript to ES6', () => {
      const result = updateLanguage(alumni);
      result.forEach(obj => {
        expect(obj.language).toBe('ES6');
      });
    });

    test('should return all objects with updated language', () => {
      const result = updateLanguage(alumni);
      expect(result.length).toBe(alumni.length);
    });

    test('should not mutate the original array', () => {
      const original = JSON.parse(JSON.stringify(alumni));
      updateLanguage(alumni);
      expect(alumni).toEqual(original);
    });

    test('should preserve other properties', () => {
      const result = updateLanguage(alumni);
      result.forEach((obj, index) => {
        expect(obj.name).toBe(alumni[index].name);
        expect(obj.job).toBe(alumni[index].job);
        expect(obj.age).toBe(alumni[index].age);
      });
    });
  });

  describe('12. orderedAlumni', () => {
    test('should sort by age from oldest to youngest', () => {
      const result = orderedAlumni(alumni);
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].age).toBeGreaterThanOrEqual(result[i + 1].age);
      }
    });

    test('should not mutate the original array', () => {
      const original = JSON.parse(JSON.stringify(alumni));
      orderedAlumni(alumni);
      expect(alumni).toEqual(original);
    });

    test('should return all alumni', () => {
      const result = orderedAlumni(alumni);
      expect(result.length).toBe(alumni.length);
    });
  });

  describe('13. averageAge', () => {
    test('should return the average age rounded to nearest whole number', () => {
      const result = averageAge(alumni);
      // Calculate expected: (24 + 25 + 27 + 25 + 23 + 25 + 27) / 7 = 176 / 7 = 25.14... ≈ 25
      expect(result).toBe(25);
    });

    test('should handle rounding correctly', () => {
      const testArray = [
        { name: 'A', age: 20 },
        { name: 'B', age: 30 },
      ];
      expect(averageAge(testArray)).toBe(25);
    });
  });

  describe('14. ninetiesBabies', () => {
    test('should return only objects where age is larger than 25', () => {
      const result = ninetiesBabies(alumni);
      result.forEach(obj => {
        expect(obj.age).toBeGreaterThan(25);
      });
    });

    test('should not include objects with age 25 or less', () => {
      const result = ninetiesBabies(alumni);
      result.forEach(obj => {
        expect(obj.age).not.toBeLessThanOrEqual(25);
      });
    });

    test('should return correct alumni', () => {
      const result = ninetiesBabies(alumni);
      const expected = alumni.filter(obj => obj.age > 25);
      expect(result.length).toBe(expected.length);
      expect(result.map(obj => obj.name).sort()).toEqual(expected.map(obj => obj.name).sort());
    });
  });

  describe('15. allUseJavaScript', () => {
    test('should return true if all objects use JavaScript', () => {
      expect(allUseJavaScript(alumni)).toBe(true);
    });

    test('should return false if any object does not use JavaScript', () => {
      const mixedArray = [
        { name: 'A', language: 'JavaScript' },
        { name: 'B', language: 'Python' },
      ];
      expect(allUseJavaScript(mixedArray)).toBe(false);
    });

    test('should return true for empty array', () => {
      expect(allUseJavaScript([])).toBe(true);
    });
  });
});

