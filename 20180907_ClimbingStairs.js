//70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //如果只有一个台阶，方法有1种
    if(n == 1){
        return 1;
    }
    //新建一个数组，第i个位置存放着到达第i个台阶的方法数
    let step_sum = [];
    //到达第1个台阶有1个方法，到达第2个台阶有2个方法
    step_sum[1] = 1;
    step_sum[2] = 2;
    
    //到达第i个台阶的方法有两种：
    //先到达第i-1个台阶，再走一步
    //先到达第i-2个台阶，再走两步
    //故到达第i个台阶的方法数是到达第i-1个台阶的方法数加到达第i-2个台阶的方法数
    for(let i = 3;i <= n;i++){
        step_sum[i] = step_sum[i-1] + step_sum[i-2];
    }
    
    return step_sum[n];
};