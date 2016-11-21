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
  }
};

Object.assign(String.prototype, ExtendString);
