const ExtendString = {
  hasVowels() {
    return /[aeiou]/i.test(this);
  },
  toUpper() {
    const len = this.length;
    let cap = '';
    for (let i = 0; i < len; i += 1) {
      if (this[i].match(/[a-z]/)) {
        cap += String.fromCharCode(this.charCodeAt(i) - 32);
      } else {
        cap += this[i];
      }
    }
    return cap;
  },
  toLower() {
    const len = this.length;
    let lower = '';
    for (let i = 0; i < len; i += 1) {
      if (this[i].match(/[A-Z]/)) {
        lower += String.fromCharCode(this.charCodeAt(i) + 32);
      } else {
        lower += this[i];
      }
    }
    return lower;
  },
  ucFirst() {
    return (this[0].toUpper() + this.slice(1));
  },
  isQuestion() {
    return /[?]$/.test(this);
  },
  words() {
    return this.match(/(\w+)/g);
  },
  wordCount() {
    return this.words().length;
  },
  toCurrency() {
    if (this.split('.').length === 2) {
      return `${parseInt(this, 10).toLocaleString()}.${this.split('.')[1]}`;
    }
    return `${parseInt(this, 10).toLocaleString()}`;
  },
  fromCurrency() {
    return parseFloat(this.replace(/,/g, ''));
  },
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
  alternatingCase() {
    const len = this.length;
    let alternatingCase = '';
    for (let i = 0; i < len; i += 1) {
      if ((i % 2 !== 0)) {
        alternatingCase += this[i].toUpper();
      } else {
        alternatingCase += this[i].toLower();
      }
    }
    return alternatingCase;
  },
  getMiddle() {
    const len = this.length;
    if (len % 2 === 0) {
      return `${this[(len / 2) - 1]}${this[(len / 2)]}`;
    }
    return this[parseInt((len / 2), 10)];
  },
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
      9: 'nine' };
    const numbers = this.toString().split('');
    let word = '';
    numbers.forEach((number) => {
      word += `${numberWords[number]} `;
    });
    return word.slice(0, -1);
  },
  isDigit() {
    if (/\d+/.exec(this).toString().length > 1) {
      return false;
    }
    return true;
  },
  doubleCheck() {
    return /(\w).*?\1|(\W).*?\1/.test(this);
  }
};

Object.assign(String.prototype, ExtendString);
