//657. Judge Route Circle
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let sumL= 0,sumR= 0,sumU= 0,sumD = 0;
    for( let i = 0; i < moves.length; i++){
        switch(moves[i]){
            case 'L': sumL++;break;
            case 'R': sumR++;break;
            case 'U': sumU++;break;
            case 'D': sumD++;break;
        }
    }
    //console.log(sumL,sumR,sumU,sumD);
    if(sumL == sumR && sumU == sumD){
        return true;
    }else{
        return false;
    }
};

//console.log(judgeCircle('RLUURDDDLU'));