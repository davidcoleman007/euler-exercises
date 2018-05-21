const euler4 = require('./euler-4');
const euler18 = require('./euler-18');
const euler67 = require('./euler-67');
const euler89 = require('./euler-89');
const euler102 = require('./euler-102');
const euler148 = require('./euler-148');

const answerHeader = `
============ answer =============
`;
const divider = `

--------------------------------------------------------------------

`;

const euler4text = `
* Solution for https://projecteuler.net/problem=4
*
* A palindromic number reads the same both ways. The largest palindrome made
* from the product of two 2-digit numbers is 9009 = 91 × 99.
*
* Find the largest palindrome made from the product of two 3-digit numbers.
*
* reason for choosing this problem: It looks fun :) "isAPal" was just too fun of a function name to NOT write it up! :P
*
`;

console.log(
  divider,
  euler4.problemName,
  euler4text,
  answerHeader,
  euler4.solve(3)
);
for(let i = 4 ; i <= 7 ; i++) {
  console.log(
    `bonus! largest palindrome made from the product of 2 ${i} digit numbers`,
    answerHeader,
    euler4.solve(i)
  );
}

console.log(divider);

const euler18text = `
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
*                     75
*                    95 64
*                   17 47 82
*                  18 35 87 10
*                 20 04 82 47 65
*                19 01 23 75 03 34
*               88 02 77 73 07 63 67
*              99 65 04 28 06 16 70 92
*             41 41 26 56 83 40 80 70 33
*            41 48 72 33 47 32 37 16 94 29
*           53 71 44 65 25 43 91 52 97 51 14
*          70 11 33 28 77 73 17 78 39 68 17 57
*         91 71 52 38 17 14 91 43 58 50 27 29 48
*        63 66 04 68 89 53 67 30 73 16 69 87 40 31
*       04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
`;

console.log(
  euler18.problemName,
  euler18text,
  answerHeader,
  euler18.solve('euler-18.txt'),
  divider
);

const euler67text = `
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
`;

console.log(
  euler67.problemName,
  euler67text,
  answerHeader,
  euler67.solve('euler-67.txt'),
  divider
);

const euler89txt = `
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
`;

console.log(
  euler89.problemName,
  euler89txt,
  answerHeader,
  euler89.solve(),
  divider
);

const euler102txt = `
* Three distinct points are plotted at random on a Cartesian plane, for which -1000 ≤ x, y ≤ 1000, such that a triangle is formed.
*
* Consider the following two triangles:
*
* A(-340,495), B(-153,-910), C(835,-947)
*
* X(-175,41), Y(-421,-714), Z(574,-645)
*
* It can be verified that triangle ABC contains the origin, whereas triangle XYZ does not.
*
* Using triangles.txt (right click and 'Save Link/Target As...'), a 27K text file containing the co-ordinates of one thousand
* "random" triangles, find the number of triangles for which the interior contains the origin.
*
* NOTE: The first two examples in the file represent the triangles in the example given above.
*
* I chose this because:
* This is an old problem (from my flash days) a point is outside a triangle if the 3 triangles comprised of that point and the line segments of the
* test triangle sum to > the area of the test triangle.
*
`;

console.log(
  euler102.problemName,
  euler102txt,
  answerHeader,
  euler102.solve(),
  divider
);

const euler148txt = `
* We can easily verify that none of the entries in the first seven rows of Pascal's triangle are divisible by 7:
*
*                                        1
*                                      1   1
*                                    1   2   1
*                                  1   3   3   1
*                                1   4   6   4   1
*                              1   5  10  10   5   1
*                            1   6  15  20  15   6   1
*
* However, if we check the first one hundred rows, we will find that only 2361 of the 5050 entries are not divisible by 7.
*
* Find the number of entries which are not divisible by 7 in the first one billion (10^9) rows of Pascal's triangle.
*
* I chose this problem because I wanted to pick a problem > 100 and I want to see if I can do it :P  Since Pascal was one
* of the first languages I learned back when I was about 14 yrs old, it seemed like a fun choice.
*
`;

console.log(
  euler148.problemName,
  euler148txt,
  answerHeader,
  euler148.solve(10**9),
  divider
);
