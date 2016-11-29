/** Extend string class in javascript to support more string manipulation features */

const ExtendString = {

  /**
  * Checks if the argument contains vowels
  * @returns {Boolean} boolean.
  * @example
  * // returns true
  * 'hello'.hasVowels();
  */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
  * Converts the argument to uppercase characters
  * @returns {String} string
  * @example
  * // returns 'HELLO'
  * 'hello'.toUpper();
  */
  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(this.charCodeAt(this.indexOf(letter)) - 32));
  },

  /**
  * Converts the argument to lowercase characters
  * @returns {String} string
  * @example
  * // returns 'hello'
  * 'HELLO'.toLower();
  */
  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(this.charCodeAt(this.indexOf(letter)) + 32));
  },

  /**
  * Converts the  first character of the argument to uppercase
  * @returns {String} string
  * @example
  * // returns 'Hello'
  * 'hello'.ucFirst();
  */
  ucFirst() {
    return (`${this[0].toUpper()}${this.slice(1)}`);
  },

  /**
  * Checks if the argument is a question
  * @returns {Boolean} boolean
  * @example
  * // returns true
  * 'are you coming?'.isQuestion();
  */
  isQuestion() {
    return /([a-z])\?$/i.test(this);
  },

  /**
  * Returns the list of words in a string as an array
  * @returns {array} array
  * @example
  * // returns ['hello','world']
  * 'hello world'.words();
  */
  words() {
    return this.match(/(\w+)/g);
  },

  /**
  * Counts the number of words in a string
  * @returns {Number} number
  * @example
  * // returns 2
  * 'hello world'.wordCount();
  */
  wordCount() {
    return this.words().length;
  },

  /**
  * Converts the argument to a currency format
  * @returns {String} string
  * @example
  * // returns '11,111.11'
  * '11111.11'.toCurrency();
  */
  toCurrency() {
    return (this.split('.').length === 2)
    ? `${parseInt(this, 10).toLocaleString()}.${this.split('.')[1]}`
    : `${parseInt(this, 10).toLocaleString()}`;
  },

  /**
  * Converts the argument in currency format to number
  * @returns {Number} number
  * @example
  * // returns '11111.11'
  * '11,111.11'.fromCurrency();
  */
  fromCurrency() {
    return parseFloat(this.replace(/,/g, ''));
  },

  /**
  * Returns the argument passed in with inverted character cases
  * @returns {String} string
  * @example
  * // returns 'mR. bEN'
  * 'Mr. Ben'.inverseCase();
  */
  inverseCase() {
    return this.split('').map(letter => ((/[a-z]/.test(letter))
    ? letter.toUpper()
    : letter.toLower()))
    .join()
    .replace(/,/g, '');
  },

  /**
  * Returns the argument passed in with alternating character cases
  * @returns {String} string
  * @example
  * // returns 'oNoMaToPoEiA'
  * 'Onomatopoeia'.alternatingCase();
  */
  alternatingCase() {
    let len = 0;
    let alternatingCase = '';
    while (len < this.length) {
      alternatingCase += (len % 2 !== 0) ? this[len].toUpper() : this[len].toLower();
      len += 1;
    }
    return alternatingCase;
  },

  /**
  * Returns the character(s) in the middle of the argument
  * @returns {String} string
  * @example
  * // returns 'ea'
  * 'read'.getMiddle();
  */
  getMiddle() {
    return (this.length % 2 === 0)
    ? `${this[(this.length / 2) - 1]}${this[(this.length / 2)]}`
    : this[parseInt((this.length / 2), 10)];
  },

  /**
  * Returns the words equivalent of the number passed in.
  * @returns {String} string
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

  /**
  * Checks if the argument is a single digit
  * @returns {Boolean} boolean
  * @example
  * // returns true
  * '3'.isDigit();
  */
  isDigit() {
    return (/\d+/.test(this)) ? (/\d+/.exec(this).toString().length === 1) : false;
  },

  /**
  * Checks if the string contains double characters
  * @returns {Boolean} boolean
  * @example
  * // returns true
  * 'hello!!'.doubleCheck();
  */
  doubleCheck() {
    return /((\w).*?|(\W).*?)(?=(\1))/.test(this);
  }
};

Object.assign(String.prototype, ExtendString);
