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

// Questions 1-7 (using animals array)

// Questions 8-9 (using numbers array)

// Questions 10-15 (using alumni array)


// Test the functions
console.log('=== Testing with animals array (Questions 1-7) ===');
console.log('1. pluralize:', pluralize(animals));
console.log('2. uppercase:', uppercase(animals));
console.log('3. longWords:', longWords(animals));
console.log('4. oddLength:', oddLength(animals));
console.log('5. longToShort:', longToShort(animals));
console.log('6. noVowel:', noVowel(animals));
console.log('7. allFour:', allFour(animals));

console.log('\n=== Testing with numbers array (Questions 8-9) ===');
console.log('8. sum:', sum(numbers));
console.log('9. evenNumbers:', evenNumbers(numbers));

console.log('\n=== Testing with alumni array (Questions 10-15) ===');
console.log('10. oddJob:', oddJob(alumni));
console.log('11. updateLanguage:', updateLanguage(alumni));
console.log('12. orderedAlumni:', orderedAlumni(alumni));
console.log('13. averageAge:', averageAge(alumni));
console.log('14. ninetiesBabies:', ninetiesBabies(alumni));
console.log('15. allUseJavaScript:', allUseJavaScript(alumni));

// Export functions for testing
module.exports = {
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
};
