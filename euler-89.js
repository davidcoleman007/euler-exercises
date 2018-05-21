/**
 * https://projecteuler.net/problem=89
 *
 * For a number written in Roman numerals to be considered valid there are basic rules which must be followed. Even though the rules allow some numbers to be expressed in more than one way there is always a "best" way of writing a particular number.
 *
 * For example, it would appear that there are at least six ways of writing the number sixteen:
 *
 * IIIIIIIIIIIIIIII
 * VIIIIIIIIIII
 * VVIIIIII
 * XIIIIII
 * VVVI
 * XVI
 *
 * However, according to the rules only XIIIIII and XVI are valid, and the last example is considered to be the most efficient, as it uses the least number of numerals.
 *
 * The 11K text file, roman.txt, contains one thousand numbers written in valid, but not necessarily minimal, Roman numerals; see About... Roman Numerals for the definitive rules for this problem.
 *
 * Find the number of characters saved by writing each of these in their minimal form.
 *
 * Note: You can assume that all the Roman numerals in the file contain no more than four consecutive identical units.
 *
 * I choose this problem because it is a classic
 *
 * this exercise took me ~ 1hr
 */
const problemName = 'euler89';

const fs = require('fs');
const path = require('path');

/**
 * all possible symbol:value representations for optimal conversion
 */
const romanVals =  {
  M  : 1000,
  CM : 900,
  D  : 500,
  CD : 400,
  C  : 100,
  XC : 90,
  L  : 50,
  XL : 40,
  X  : 10,
  IX : 9,
  V  : 5,
  IV : 4,
  I  : 1,
};

const romanSymbols =  {
  1000 : 'M',
  900  : 'CM',
  500  : 'D',
  400  : 'CD',
  100  : 'C',
  90   : 'XC',
  50   : 'L',
  40   : 'XL',
  10   : 'X',
  9    : 'IX',
  5    : 'V',
  4    : 'IV',
  1    : 'I',
};

/**
 * by taking the floor of the number of times each symbol's value divides into
 * the remainder of the input number after removing the previous match, we
 * ensure that we show the most optimal representation
 *
 * @param {Number} num number to convert to roman numerals
 */
const toRoman = num => {
  let romanStr = '';
  // for every possible symbol/value pair in descending order
  Object.entries(romanVals).forEach(
    // destructure the symbol and value from the array
    ([symbol, value]) => {
      // divide the number by this value and truncate to int
      const factor = (num / value)>>0;
      // append the corresponding symbol that many times
      romanStr += symbol.repeat(factor);
      // subtract the corresponding value the same number of times
      num -= factor * value;
    }
  );
  // return the string
  return romanStr;
}

/**
 * converts any string in **valid** roman notation to a Number
 *
 * @param {String} rom A value in roman notation
 */
const romanToNumber = rom => {
  let rest = rom;
  // get an array of values in ascending order
  let values = Object.keys(romanSymbols).map(valStr => Number(valStr));
  // init output number to 0
  let number = 0;
  // while we still have values to test for
  while(values.length) {
    // pop off the highest value still to be tested for
    const curVal = values.pop();
    // this is the symbol for the current value
    const curSymbol = romanSymbols[curVal];
    // while this symbol is found at the beginning of the roman string
    while(rest.indexOf(curSymbol) === 0) {
      // replace the first occurence of the symbol with ''
      rest = rest.replace(curSymbol,'');
      // add the value of that symbol to the output
      number += curVal;
    }
    // loop through all possible symbols
  }
  // return the number after all possible symbols are calculated
  return number;
}

const solve = (fileName='roman.txt') => {
  const data = fs.readFileSync(path.join(__dirname,`/${fileName}`));
  const vals = data.toString().split('\n');
  let delta = 0;
  vals.forEach(
    val => {
      const bestRoman = toRoman(romanToNumber(val));
      delta += val.length - bestRoman.length;
    }
  );
  return delta;
}

module.exports = {
  problemName,
  romanToNumber,
  toRoman,
  solve
};


