/**
 * Solution for https://projecteuler.net/problem=4
 *
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 *
 * reason for choosing this problem: It looks fun :) "isAPal" was just too fun of a function name to NOT write it up! :P
 *
 * this exercise took me ~ 10 mins
 */

const isAPal = str => {
  const chars = str.split('');
  const {length} = chars;
  for(let i = 0 ; i < ((length/2)>>0) ; i++) {
    if(chars[i] !== chars[length-1-i]) {
      return false;
    }
  }
  return true;
}

/**
 *
 * @param {Number} n number of digits to solve for
 *
 * this algorithm ensures that we test each combination of factors only once
 * starting with the highest possible factors
 *
 * we return an array of the first factors to result in a palindrome product
 * as well as the product itself
 */
const largestPalindromeProduct = n => {
   // start with the highest value possible for n digits
    const start = Math.pow(10,n);
    // cannot go below n digits
    const end = Math.pow(10, n-1);
    // first number is (n^10)-1
    let curBase = start - 1;
    // first test factor is the same as the highest possible value
    let testFactor = curBase;
    // now we will loop down -> 0
    while(curBase >= end) {
      // now we will test all the numbers between the highest possible factor and the current base
      while(testFactor >= curBase) {
        // multiply 'em
        const product = curBase * testFactor;
        // is it a palindrome?
        if(isAPal(product.toString())) {
          // yes! return the 2 factors as an array
          return [curBase, testFactor, product];
        }
        // nope? ok, decrement the factor until it's == to the current base
        testFactor--;
      }
      // reset the test factor to the highest possible factor
      testFactor = start -1;
      // decrement the base by 1
      curBase--;
    }
    // we didn't find a set of factors which resulted in a palindrome
    return false;
}

const solve = n => {
  console.log(`solving https://projecteuler.net/problem=4 for ${n} digits`);
  const start = (new Date()).getTime();
  const product = largestPalindromeProduct(n);
  const end = (new Date()).getTime();
  const duration = end - start;
  console.log(product);
  console.log(`time elapsed: ${duration} ms`);
  return product;
}

module.exports = {solve};