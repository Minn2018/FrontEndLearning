//66. Plus One
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //把数先反过来，方便理解，从第一位开始是个位
    digits.reverse();
    //个位数加1
    digits[0]++;
    let plus = 0;
    for(let i = 0;i < digits.length; i++){   
        //如果当前位数大于10，则向前一位进1，用plus表示进位
        if(digits[i] >= 10){
            plus = 1;
            digits[i] = 0;
            //判断位数会不会超出当前digits的长度，如果超出了，直接在数组末尾加个1
            if(digits[i+1] != null){
                digits[i+1] += plus;
            }else{
                digits[i+1] = plus;
            }          
        }
        
    }

    return digits.reverse();
};
//console.log(plusOne([9,9,9]));