/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  /*
  for (; i < preferences.length; i++) {
    var l = i+3;
    if (l <= preferences.length) {
      if (((preferences[i] == i + 2) && (preferences[i + 1] == i + 3) && (preferences[i+2] == i+1)) || 
      ((preferences[i] == i + 3) && (preferences[i + 1] == i + 1) && (preferences[i + 2] == i + 2))) {
      t = t + 1;
      } 
    }
  }
return t;
*/


var n = 0;
var t = 0;
for (; n < preferences.length; n++) {
  var a = preferences[n];
  var b = preferences[a-1];
  var c = preferences[b-1]
  if ((c == n+1) && (a != b) && (a != c) && (b != c)) {
    t = t + 1;
    preferences[n] = 0;
    preferences[a-1] = 0;
    preferences[b-1] = 0;
  }  
}

return t;
};
