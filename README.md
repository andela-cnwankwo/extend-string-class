# Extend String Class

[![Build Status](https://travis-ci.org/andela-cnwankwo/string-class.svg?branch=develop)](https://travis-ci.org/andela-cnwankwo/string-class)

### Introduction
Using Prototype Oriented Programming, methods, procedures and instance attributes are added to the Javascript String class to support more string manipulation features

### Technology and Dependencies
    - Javascript ES6 (ECMAScript 2015)
    - Node JS

### Methods Added
 The following methods are added to the String class:
    - hasVowels: Checks if the argument contains vowels 

    - toUpper: Converts the argument to uppercase characters

    - toLower: Converts the argument to lowercase characters

    - ucFirst: Converts the  first character of the argument to uppercase

    - isQuestion: Checks if the argument is a question

    - words: Returns the list of words in the specified string as an array

    - wordCount: Counts the number of words in a string

    - toCurrency: Converts the argument to a currency format

    - fromCurrency: Converts the argument in currency format to number

    - inverseCase: Returns the argument passed in with inverted character cases

    - alternatingCase: Returns the argument passed in with alternating character cases

    - getMiddle: Returns the character(s) in the middle of the argument

    - numberWords: Returns the words equivalent of the number passed in.

    - isDigit: Checks if the argument is a single digit

    - doubleCheck: Checks if the string contains double characters

### Usage
'< argument >'.< methodName() > for instance: 'Do you wish to contribute?'.isQuestion()  // Returns true


### Contribute
    - Clone the github repository by running the command on a terminal: git clone https://github.com/andela-cnwankwo/string-class.git

    - Make sure you have latest version of node installed, 
    then navigate to the application folder and install dependencies by running the command: npm install

    - Test the methods of the application locally using the command: npm test

    - Create a new branch locally for your desired feature using: git checkout -b <your branch name>

    - Make desired changes and push to github using: git push origin <your branch name>

    - Open a pull request.

### How to Test
    - After cloning the repository and installing dependencies as specified above, run the command: npm test
