
//53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var curSum = 0;
    var maxSum = nums[0];
    for(var i = 0;i < nums.length; i++){
        //console.log(nums[i] , curSum + nums[i]);
        //数组中的数逐个相加，如果加了一个数nums[i]，当前和curSum减小了，甚至小于nums[i]本身，则直接抛弃当前和，以nums[i]重新开始加下一个数；
        curSum = (nums[i] > curSum + nums[i])? nums[i] : curSum + nums[i];
        //console.log(curSum);
        //不断记录当前和的最大值，因为在加的过程和可能会减小
        maxSum = (maxSum > curSum) ? maxSum : curSum;
    }
   
    return maxSum;
};

//console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));