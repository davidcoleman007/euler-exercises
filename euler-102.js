/**
 * since I felt like 148 wasn't an ideal example to submit, I have taken on 102, as I KNOW that finding if a point is in
 * a triangle is something that I know how to do.
 *
 * the only reference material I used was:
 *   https://www.google.com/search?ei=oIwAW5b4J4215gLp7YCYDw&q=area+of+a+triangle+from+arbitrary+points&oq=area+of+a+triangle+from+arbitrary+points&gs_l=psy-ab.3...14169.18761.0.18882.0.0.0.0.0.0.0.0..0.0....0...1.1.64.psy-ab..0.0.0....0.aAarx9xNvv0
 *   https://www.mathopenref.com/coordtrianglearea.html
 * (for calculating the area of a triangle).
 *
 * This is an old problem: a point is outside a triangle if the 3 triangles comprised of that point and the line segments of the
 * test triangle sum to > the area of the test triangle.
 *
 * ------------------- problem statement: -----------------------
 *
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
 * --------------- duration -------------------
 * time spent < 30 mins
 *
 */
const euler102 = 'euler102';
const fs = require('fs');
const path = require('path');


/**
 * calculate the area of a triangle
 *
 * @param {Number} ax
 * @param {Number} ay
 * @param {Number} bx
 * @param {Number} by
 * @param {Number} cx
 * @param {Number} cy
 */
const tArea = (ax, ay, bx, by, cx, cy) => {
  const area = Math.abs((
    ax * (by - cy) +
    bx * (cy - ay) +
    cx * (ay - by)
  )/2);
  return area;
};

const solve = (fname = 'triangles.txt') => {
  const data = fs.readFileSync(path.join(__dirname,`/${fname}`)).toString();
  const triangles = data.split('\n');
  let doNotContain = 0;
  triangles.forEach(
    triangle => {
      const [ax, ay, bx, by, cx, cy] = triangle.split(',');
      const area = tArea(ax, ay, bx, by, cx, cy);
      const originArea = (
        tArea(ax, ay, bx, by,  0,  0) +
        tArea(ax, ay, 0 ,  0, cx, cy) +
        tArea( 0,  0, bx, by, cx, cy)
      );
      if(originArea > area) {
        doNotContain++;
      }
    }
  );
  return doNotContain;
};

module.exports={solve};
