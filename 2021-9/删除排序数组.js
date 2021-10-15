var removeDuplicates = function(nums) {
  const n = nums.length;
  if(n === 0) {
    return 0;
  }
  let j = 1;
  for(let i = 1; i < nums.length; i++) {
    if(nums[i] != nums[j-1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}

var arr = [1,1,2,2,3,4,5,6]
var arr1 = removeDuplicates(arr);
console.log(arr1)