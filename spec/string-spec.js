const expect = require('chai').expect;
require('../src/string');

describe('String class', () => {
  describe('hasVowels method', () => {
    it('Should return true if the string contains vowels', () => {
      expect('home'.hasVowels()).to.be.true;
    });
    it('Should return false if the string does not contain vowels', () => {
      expect('bcd'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper method', () => {
    it('Should return the string with all characters in upper case', () => {
      expect('home'.hasUpper()).to.equal('HOME');
    });
  });
});
