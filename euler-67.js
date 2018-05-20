/**
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *
 * 3
 * 7 4
 * 2 4 6
 * 8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom in triangle.txt (right click and 'Save Link/Target As...'),
 * a 15K text file containing a triangle with one-hundred rows.
 *
 * NOTE: This is a much more difficult version of Problem 18. It is not possible to try every route to solve
 * this problem, as there are 2^99 altogether! If you could check one trillion (10^12) routes every second it
 * would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)
 *
 * time : 3 mins to copy data, create txt file and type the few lines below.
 */
const euler67='euler67';

const {solve} = require ('./euler-18');

module.exports = {solve};

console.log(solve('euler-67.txt'));