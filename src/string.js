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
      return `${parseInt(this).toLocaleString()}.${this.split('.')[1]}`;
    }
    return `${parseInt(this).toLocaleString()}`;
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
  }
};

Object.assign(String.prototype, ExtendString);
