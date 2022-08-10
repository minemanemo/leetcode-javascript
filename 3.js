/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (map[char] !== undefined && map[char] >= start) {
      start = map[char] + 1;
    }
    map[char] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
};


var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let val = 1;
  let anchor = 0;
  let chars = [s[0]];
  
  for (let i = 1; i < s.length; i++) {
      val = i - anchor + 1 > val ? i - anchor + 1 : val;
      if (chars.includes(s[i])) {
          anchor = i;
          chars = [s[i]];
      } else {
          chars.push(s[i]);
      }
  }
  
  console.log(val);
  return val;
};