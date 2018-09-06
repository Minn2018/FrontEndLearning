//67. Add Binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = new Array;
    let plus = 0;   
    const maxLen = (a.length > b.length) ? a.length : b.length;

    //将字符串转为数组便于使用push，reverse函数
    let aArray = a.split('').reverse();
    let bArray = b.split('').reverse();
    
    for(let i = 0;i < maxLen;i++){
        //如果位数不够，则自动补零
        if(aArray[i] == undefined){
            aArray.push('0');
        }
        
        if(bArray[i] == undefined){
            bArray.push('0');
        }
        //sum数组用来储存相加后的数
        sum[i] = (aArray[i] - '0') + (bArray[i] - '0') + plus;
     
        if(sum[i] >= 2){
            plus = 1;
            sum[i] -= 2;
        }else{
            plus = 0;
        }
        //如果加到最高位仍有进位，则再补一个1
        if(plus == 1 && i == maxLen - 1){
                sum.push(1);
            }
    }
    //利用join函数将数组转化为字符串
    return sum.reverse().join('');
};



//console.log(addBinary('1111','1111'));