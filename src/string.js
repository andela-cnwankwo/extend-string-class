const ExtendString = {
  hasVowels() {
    return /[aeiou]/i.test(this);
  },
  toUpper() {
    const len = this.length;
    let cap = '';
    for (let i = 0; i < len; i += 1) {
      if (this[i].match(/[a-z]/)) {
        cap += String.fromCharCode((65 + this.charCodeAt(i)) - 97);
      } else {
        cap += this[i];
      }
    }
    return cap;
  }
};

Object.assign(String.prototype, ExtendString);
