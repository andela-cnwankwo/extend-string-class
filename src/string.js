/** Extend string class in javascript to support more string manipulation features */

const ExtendString = {

  /*
  * Checks if the argument contains vowels
  * @param {string}
  * @returns {boolean}
  * @example
  * // returns true
  * 'hello'.hasVowels();
  */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /*
  * Converts the argument to uppercase characters
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'HELLO'
  * 'hello'.toUpper();
  */
  toUpper() {
    const upperLength = this.length;
    let cap = '';
    for (let i = 0; i < upperLength; i += 1) {
      if (this[i].match(/[a-z]/)) {
        cap += String.fromCharCode(this.charCodeAt(i) - 32);
      } else {
        cap += this[i];
      }
    }
    return cap;
  },

  /*
  * Converts the argument to lowercase characters
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'hello'
  * 'HELLO'.toLower();
  */
  toLower() {
    const lowerLength = this.length;
    let lower = '';
    for (let j = 0; j < lowerLength; j += 1) {
      if (this[j].match(/[A-Z]/)) {
        lower += String.fromCharCode(this.charCodeAt(j) + 32);
      } else {
        lower += this[j];
      }
    }
    return lower;
  },

  /*
  * Converts the  first character of the argument to uppercase
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'Hello'
  * 'hello'.ucFirst();
  */
  ucFirst() {
    return (this[0].toUpper() + this.slice(1));
  },

  /*
  * Checks if the argument is a question
  * @param {string}
  * @returns {boolean}
  * @example
  * // returns true
  * 'are you coming?'.isQuestion();
  */
  isQuestion() {
    return /[?]$/.test(this);
  },

  /*
  * Returns the list of words in a string as an array
  * @param {string}
  * @returns {array}
  * @example
  * // returns ['hello','world']
  * 'hello world'.words();
  */
  words() {
    return this.match(/(\w+)/g);
  },

  /*
  * Counts the number of words in a string
  * @param {string}
  * @returns {number}
  * @example
  * // returns 2
  * 'hello world'.wordCount();
  */
  wordCount() {
    return this.words().length;
  },

  /*
  * Converts the argument to a currency format
  * @param {string}
  * @returns {string}
  * @example
  * // returns '11,111.11'
  * '11111.11'.toCurrency();
  */
  toCurrency() {
    if (this.split('.').length === 2) {
      return `${parseInt(this, 10).toLocaleString()}.${this.split('.')[1]}`;
    }
    return `${parseInt(this, 10).toLocaleString()}`;
  },

  /*
  * Converts the argument in currency format to number
  * @param {string}
  * @returns {number}
  * @example
  * // returns '11111.11'
  * '11,111.11'.fromCurrency();
  */
  fromCurrency() {
    return parseFloat(this.replace(/,/g, ''));
  },

  /*
  * Returns the argument passed in with inverted character cases
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'mR. bEN'
  * 'Mr. Ben'.inverseCase();
  */
  inverseCase() {
    const len = this.length;
    let inverseCase = '';
    for (let i = 0; i < len; i += 1) {
      if (this[i].match(/[a-z]/)) {
        inverseCase += this[i].toUpper();
      } else {
        inverseCase += this[i].toLower();
      }
    }
    return inverseCase;
  },

  /*
  * Returns the argument passed in with alternating character cases
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'oNoMaToPoEiA'
  * 'Onomatopoeia'.alternatingCase();
  */
  alternatingCase() {
    const wordLength = this.length;
    let alternatingCase = '';
    for (let k = 0; k < wordLength; k += 1) {
      if ((k % 2 !== 0)) {
        alternatingCase += this[k].toUpper();
      } else {
        alternatingCase += this[k].toLower();
      }
    }
    return alternatingCase;
  },

  /*
  * Returns the character(s) in the middle of the argument
  * @param {string}
  * @returns {string}
  * @example
  * // returns 'ea'
  * 'read'.getMiddle();
  */
  getMiddle() {
    const len = this.length;
    if (len % 2 === 0) {
      return `${this[(len / 2) - 1]}${this[(len / 2)]}`;
    }
    return this[parseInt((len / 2), 10)];
  },

  /*
  * Returns the words equivalent of the number passed in.
  * @param {number}
  * @returns {string}
  * @example
  * // returns 'three two five'
  * '325'.numberWords();
  */
  numberWords() {
    const numberWords = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    const numbers = this.toString().split('');
    let word = '';
    numbers.forEach((number) => {
      word += `${numberWords[number]} `;
    });
    return word.slice(0, -1);
  },

  /*
  * Checks if the argument is a single digit
  * @param {number}
  * @returns {boolean}
  * @example
  * // returns true
  * '3'.isDigit();
  */
  isDigit() {
    if (/\d+/.exec(this).toString().length > 1) {
      return false;
    }
    return true;
  },

  /*
  * Checks if the string contains double characters
  * @param {string}
  * @returns {boolean}
  * @example
  * // returns true
  * 'hello!!'.doubleCheck();
  */
  doubleCheck() {
    return /(\w).*?\1|(\W).*?\1/.test(this);
  }
};

Object.assign(String.prototype, ExtendString);
