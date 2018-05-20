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
 * Find the maximum total from top to bottom of the triangle below:
 *
 * 75
 * 95 64
 * 17 47 82
 * 18 35 87 10
 * 20 04 82 47 65
 * 19 01 23 75 03 34
 * 88 02 77 73 07 63 67
 * 99 65 04 28 06 16 70 92
 * 41 41 26 56 83 40 80 70 33
 * 41 48 72 33 47 32 37 16 94 29
 * 53 71 44 65 25 43 91 52 97 51 14
 * 70 11 33 28 77 73 17 78 39 68 17 57
 * 91 71 52 38 17 14 91 43 58 50 27 29 48
 * 63 66 04 68 89 53 67 30 73 16 69 87 40 31
 * 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
 *
 * NOTE: As there are only 16384 routes, it is possible to solve this problem by trying every route. However, Problem 67, is the
 * same challenge with a triangle containing one-hundred rows; it cannot be solved by brute force, and requires a clever method! ;o)
 *
 * ----------------------
 * start 2:27 pm sunday
 *
 * I chose this problem because it can segway into another 50+ problem :)  two birds with one stone!
 *
 * Also I should be able to solve this with recursion and I didn't do a recursion problem yet.
 *
 * === 2:28 pause to get a coke :P
 *
 * === 2:31 coding - created txt files with test and problem values
 *
 * === 2:33 create getData();
 *
 * === 2:48 create getTriangleMatrix() - working and parsing a usable 0 padded matrix
 *
 * === 2:56 DONE!
 *
 * === 3:04 Euler 67 also done
 */
const euler18='euler18';

const fs = require('fs');
const path = require('path');

const TEST_DATA_FILE = 'euler-18-test.txt';

/**
 * reads in a data file and returns it as a string
 *
 * @param {String} fName file name to read
 */
const getData = (fName = TEST_DATA_FILE) => {
  const data = fs.readFileSync(path.join(__dirname,fName));
  return data.toString();
}

/**
 * Convert triangle data string to an array of values
 *
 * @param {String} data Triangle data as a string
 */
const getTriangleMatrix = (data) => {
  const lines = data.split('\n');
  // get the longest (last) line
  const maxNums = lines[lines.length-1].split(' ').length;
  const matrix = lines.map(line => {
    const nums = line.split(' ');
    const filledLine = [
      ...nums.map(number=>parseInt(number)),
      ...Array(maxNums-nums.length).fill(0)
    ];
    return filledLine;
  });
  return matrix;
}

/**
 * work upwards from the 2nd to last row
 * compare the next row (i+1) values from j and j+1, adding the max of each of these values
 * to the current index (j) in the inspect row (i)
 *
 * when we get all the way to the top, we will have chosen the maximum path possible with a
 * simple 1x raster scan of each number in the tree
 *
 * this shoule work excellent for the more complex problem mentioned above (#67)
 *
 * @param {String} fName
 */
const solve = (fName = TEST_DATA_FILE) => {
  const matrix = getTriangleMatrix(getData(fName));
  for(let i = matrix.length-2 ; i >= 0 ; i--) {
    const line = matrix[i];
    const nextLine = matrix[i+1];
    for(let j = 0 ; j < line.length-1 ; j++) {
      matrix[i][j] += Math.max(nextLine[j], nextLine[j+1]);
    }
  }
  const solution = matrix[0][0];
  return solution;
}

module.exports = {solve};