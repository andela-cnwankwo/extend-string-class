const expect = require('chai').expect;
require('../src/string');

describe('String class', () => {
  describe('hasVowels', () => {
    it('Should return true if the string contains vowels', () => {
      expect('home'.hasVowels()).to.be.true;
    });
    it('Should return false if the string does not contains vowels', () => {
      expect('bcd'.hasVowels()).to.be.false;
    });
  });

  describe('toUpper', () => {
    it('Should return the string with all characters in upper case', () => {
      expect('hoMe'.toUpper()).to.equal('HOME');
      expect('#hel$lo'.toUpper()).to.equal('#HEL$LO');
    });
  });

  describe('toLower', () => {
    it('Should return the string with all characters in lower case', () => {
      expect('HOME'.toLower()).to.equal('home');
      expect('HO#$ME'.toLower()).to.equal('ho#$me');
    });
  });

  describe('ucFirst', () => {
    it('Should return the string with the first character in upper case', () => {
      expect('home'.ucFirst()).to.equal('Home');
    });
  });

  describe('isQuestion', () => {
    it('Should return true if the string is a question', () => {
      expect('Are you done?'.isQuestion()).to.be.true;
    });
    it('Should return false if the string is not a question', () => {
      expect('I am done'.isQuestion()).to.be.false;
      expect('I am ? not a question'.isQuestion()).to.be.false;
    });
    it('Should return false if the string is not valid word', () => {
      expect('???'.isQuestion()).to.be.false;
      expect('?'.isQuestion()).to.be.false;
      expect('  ?'.isQuestion()).to.be.false;
    });
  });

  describe('words', () => {
    it('Should return a list of the words in the string as an array', () => {
      expect('This is a sentence'.words()).to.deep.equal(['This', 'is', 'a', 'sentence']);
      expect('This  is another  sentence'.words()).to.deep.equal(['This', 'is', 'another', 'sentence']);
    });
    it('Should return an instance of array', () => {
      expect('This is a sentence'.words() instanceof Array).to.be.true;
    });
  });

  describe('wordCount', () => {
    it('Should return the number of words in the string', () => {
      expect('number of words'.wordCount()).to.equal(3);
    });
    it('Should return only the number of words in the string', () => {
      expect('A , new ; sentence!'.wordCount()).to.equal(3);
    });
  });

  describe('toCurrency', () => {
    it('Should return a currency representation of the string', () => {
      expect('11111.11'.toCurrency()).to.equal('11,111.11');
      expect('11111'.toCurrency()).to.equal('11,111');
      expect('11111#$'.toCurrency()).to.equal('11,111');
    });
  });

  describe('fromCurrency', () => {
    it('Should return a number representation of the currency string', () => {
      expect('11,111.11'.fromCurrency()).to.equal(11111.11);
      expect('11,111.110000'.fromCurrency()).to.equal(11111.11);
    });
  });

  describe('inverseCase', () => {
    it('Should return a string where each letter of the string as an inverse of its current case', () => {
      expect('Mr. Ben'.inverseCase()).to.equal('mR. bEN');
    });
  });

  describe('alternatingCase', () => {
    it('Should return the letters in alternating cases starting with small letter', () => {
      expect('Onomatopoeia'.alternatingCase()).to.equal('oNoMaToPoEiA');
    });
  });

  describe('getMiddle', () => {
    it('Should return the character(s) at the middle of the string', () => {
      expect('read'.getMiddle()).to.equal('ea');
      expect('reads'.getMiddle()).to.equal('a');
    });
  });

  describe('numberWords', () => {
    it('Should return the numbers in words', () => {
      expect('325'.numberWords()).to.equal('three two five');
    });
  });

  describe('isDigit', () => {
    it('Should return true if the number is a digit', () => {
      expect('3'.isDigit()).to.be.true;
      expect('+3'.isDigit()).to.be.true;
    });
    it('Should return false if the number is not a digit', () => {
      expect('34'.isDigit()).to.be.false;
    });
    it('Should return false if not a number', () => {
      expect('#'.isDigit()).to.be.false;
    });
  });

  describe('doubleCheck', () => {
    it('Should return true if the string contains double characters', () => {
      expect('hello'.doubleCheck()).to.be.true;
    });
    it('Should return false if the string does not contain double characters', () => {
      expect('world'.doubleCheck()).to.be.false;
    });
    it('Should return false if the characters are not repeated', () => {
      expect('worldo'.doubleCheck()).to.be.false;
    });
  });
});
