/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
}

var twoSum = function(nums, target) {
  const map = new Map();
  
  nums.forEach((num, index) => map.set(num, index));
  
  for(let i = 0; i < nums.length; i++) {
    const other = target - nums[i];
    const find = map.get(other)
    
    if (find && find !== i) return [i, find];
  }
};