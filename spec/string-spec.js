const expect = require('chai').expect;
require('../src/string');

describe('String class', () => {
  describe('hasVowels', () => {
    it('Should return true if the string contains vowels', () => {
      expect('home'.hasVowels()).to.be.true;
    });
    it('Should return false if the string does not contain vowels', () => {
      expect('bcd'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it('Should return the string with all characters in upper case', () => {
      expect('home'.hasUpper()).to.equal('HOME');
    });
  });

  describe('toLower', () => {
    it('Should return the string with all characters in lower case', () => {
      expect('HOME'.hasUpper()).to.equal('home');
    });
  });

  describe('ucFirst', () => {
    it('Should return the string with the first character in upper case', () => {
      expect('home'.ucfirst()).to.equal('Home');
    });
  });
});
