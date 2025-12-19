# Code Challenge: Higher Order Functions

## Instructions

1. Clone down this assignment to your `code-challenges' directory to your development directory, and open in VSCode.
2. Creat a draft branch with the command `checkout -b draft`
3. Create a new file in the repo called `index.js` and code your solutions there.
4. **Be sure to run and test your code throughly!**
5. Run the tests to check solutions
6. Push your code 


## Testing Instructions
1. Run the `npm i` command to install dependencies
2. Run `npm test` to run the tests

## Code Problems

### **All the following problems can be solved using a higher order array method. You cannot use .forEach() to solve the following problems.**

### **Test all your solutions for questions 1-7 with the following variable:**

```jsx
const animals = ['cheetah', 'dog', 'cat', 'dodobird', 'bear', 'dolphin']
```

1. Write a function named `pluralize` that takes an array of words that are singular and returns a new array of the same words pluralized.

    ```jsx
    pluralize(animals) // ['cheetahs', 'dogs', 'cats', 'dodobirds', 'bears', 'dolphins']
    ```

2. Write a function named `uppercase` that takes an array of strings change every first letter in the string to uppercase.

    ```jsx
    uppercase(animals) // ['Cheetah', 'Dog', 'Cat', 'Dodobird', 'Bear', 'Dolphin']
    ```

3. Write a function named `longWords` that takes an array of strings and returns only the strings with more than 3 letters.

    ```jsx
    longWords(animals) // ['cheetah', 'dodobird', 'bear', 'dolphin']
    ```

4. Write a function named `oddLength` that takes an array of strings and returns an array of just the words that have an odd number of characters.

    ```jsx
    oddLength(animals) // ['cheetah', 'dog', 'cat', 'dolphin']
    ```

5. Write a function named `longToShort` that takes an array of strings, and sorts the array by string length in order of greatest to least.

    ```jsx
    longToShort(animals) // ['dodobird', 'dolphin', 'cheetah', 'bear', 'dog', 'cat']
    ```

6. Write a function named `noVowel` that takes an array of strings and returns an array of strings where all of the vowels have been turned into an x.

    ```jsx
    noVowel(animals) // ['chxxtxh', 'dxg', 'cxt', 'dxdxbxrd', 'bxxr', 'dxlphxn']
    ```

7. Write a function named `allFour` that takes an array of strings and returns true if all of the strings are a length of 4.

    ```jsx
    allFour(animals) // false
    ```

### **Test all your solutions for questions 8-9 with the following variable:**

```jsx
const numbers = [22, 15, 1114, 416, 37, 4]
```

8. Write a function named `sum` that takes an array of numbers and returns the sum of all the numbers in the array.

    ```jsx
    sum(numbers) // 1608
    ```

9. Write a function named `evenNumbers` that takes an array of numbers and returns an array of only the even numbers.

    ```jsx
    evenNumbers(numbers) // [22, 1114, 416, 4]
    ```

### **Test all your solutions for questions 10-15 with the following variable:**

```jsx
const alumni = [
  { name: 'Ana', job: 'UBS', language: 'JavaScript', age: 24 },
  { name: 'Stephanie', job: 'JPMorgan', language: 'JavaScript', age: 25 },
  { name: 'Devonte', job: 'SqaureSpace', language: 'JavaScript', age: 27 },
  { name: 'Cielo', job: 'NYT', language: 'JavaScript', age: 25 },
  { name: 'Randy', job: 'Palo Alto', language: 'JavaScript', age: 23 },
  { name: 'Azim', job: ' UBS', language: 'JavaScript', age: 25 },
  { name: 'Melissa', job: 'NYT', language: 'JavaScript', age: 27 },
]
```

10. Write a function named `oddJob` that takes an array of objects and returns an array of objects if the job length is an odd number.

11. Write a function named `updateLanguage` that takes an array of objects and updates the language value to ES6 if the language is JavaScript, return the entire object.

12. Write a function named `orderedAlumni` that takes an array of objects and sorts the objects by the age of the alumni from oldest to youngest.

13. Write a function named `averageAge` that takes an array of objects and returns the average of all the ages from each age property in each object rounded to the nearest whole number.

14. Write a function named `ninetiesBabies` that takes an array of objects and returns an array of only the objects where the age property is larger than 25.

15. Write a function named `allUseJavaScript` that takes an array of objects and returns a boolean if for every object, the language property is 'JavaScript'.
