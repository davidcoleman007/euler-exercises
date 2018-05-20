const BigNumber = require('bignumber.js');

/**
 * We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:
 *
 *                                       1
 *                                     1   1
 *                                   1   2   1
 *                                 1   3   3   1
 *                               1   4   6   4   1
 *                             1   5  10  10   5   1
 *                           1   6  15  20  15   6   1
 *
 * However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are not divisible by 7.
 *
 * Find the number of entries which are not divisible by 7 in the first one billion (10^9) rows of Pascal's triangle.
 *
 * I chose this problem because I wanted to pick a problem > 100 and I want to see if I can do it :P  Since Pascal was one
 * of the first languages I learned back when I was about 14 yrs old, it seemed like a fun choice.
 *
 * MANNNNNN did I pick a doozy!!!
 *
 * Here goes a stream of consciousness report on what i'm doing:
 *
 * first I brute forced it.  I had to use the BigNumber npm module because of major problems with js's limited precision.
 *
 * then I started to think along the lines of looking for a pattern by only dealing with 1/0 divisible/not divisible and
 * I totally see that it looked like a serpinski (sp?) triangle
 *
 * so i searched for "euler 148 serpinski" and found this: http://cjordan.github.io/2013/12/29/solving-project-euler-148/
 *
 * sooo, long story short, i got an amazing insight into some crazy math that I would never have thought of on my own...
 * I honestly can't really say that I understand why I have to increment each digit by 1...
 *
 * so i'll do a 4th problem b/c I feel that I only did the easy half of the brain work on this one and can't really say that
 * I "solved" it myself. :(
 *
 * time spent 2 hrs - gonna do another problem.
 *
 * came back to this after doing euler 102.
 *
 * plus even with this "optimized" solution it takes way > 1 min on a 3.4 GHz i7... js doesn't seem to be ideal for this problem.
 *
 * time spent: ~1 hr coding solveFaster(n) and ~1 hr waiting for it to actually complete.  not impressed.  but it did complete
 * in less than the 1 year or so the brute approach would have taken.
 *
 * more time spent : 30 mins doing the "FASTEST" solution (now assigned to solve(n)) and realizing it's nearly INSTANT, but
 * I have NO clue why it works. :(
 *
 * well check that - instinctively, I have a fuzzy grasp that it's somehow reducing the giant serpinski triangle fractal into
 * smaller triangles that I can use to get up to the total # of 1's in the triangle... but nope... I'm not a mathmetician and
 * I really don't grok it.
 *
 */
const problemName = 'euler148';

const triangular = n => (n+1)*n/2;

const solve = n => {
  let notDivisible = 0;
  const mods = [];
  //  so we will start out at n
  let reduced = n;
  // while we still have a whole number left over
  while( reduced > 0 ) {
    // store the remainder after we divide by 7
    mods.push(reduced % 7);
    // divide by 7 again
    reduced = Math.floor(reduced/7);
  }
  let triangular7 = triangular(7);
  mods.reduce(
    // _a_ccumulator, _c_urrent value, _i_ndex
    (product, c, i) => {
      // invert the index
      n = mods.length - i -1;
      // so conceptually I've really got to admit that don't remember enough math to grok what this does
      notDivisible += product * triangular(mods[n]) * Math.pow(
        triangular7, n
      )
      // ditto :(
      return product * (mods[n] + 1);
    }, 1 // initialize product to 1 with reducer fn
  )
  return notDivisible;
}

const solveFaster = n => {
  let notDivisible = 0;
  for(let i = 0; i < n ; i++) {
    const b7 = i.toString(7);
    const b7plus1 = b7.split('').map(
      digit => Number(digit)+1
    );
    const product = b7plus1.reduce(
      (a,c) => {
        return a * c;
      }, 1
    );
    notDivisible += product;
  }
  return notDivisible;
};

const solveSLOWWWWWW = n => {
  BigNumber.config({RANGE:999, DECIMAL_PLACES: 10000});
  let row1 = [new BigNumber(1)];
  let row2 = [new BigNumber(1),new BigNumber(1)];
  if( n < 7 ) {
    return 0;
  }
  let i = 3;
  let notDivisible = 3;
  let entries = 3;
  while(i <= n) {
    let iRow = Array(i).fill(0).map(
      (ignore, idx) => {
        if(idx === 0 || idx === i-1) {
          notDivisible++;
          entries++;
          return new BigNumber(1);
        }
        const val = new BigNumber(row2[idx-1].toString()).plus(row2[idx].toString());
        const test = new BigNumber(val.toString()).dividedBy(7);
        if(!test.isInteger()) {
          notDivisible++;
        }
        entries++;
        return val;
      }
    );
    // console.log(iRow.map(val=>val.toString()).join(' '));
    console.log(iRow.map(val=>val.dividedBy(7).isInteger()?0:1).join(' '))
    i++;
    row1 = row2;
    row2 = iRow;
  }
  return notDivisible;
}

module.exports = {
  problemName,
  solve
};

// console.log(solve(100));
// console.log(solve(10**9)); // 2129970655314432

