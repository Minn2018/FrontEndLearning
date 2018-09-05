//58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim();
    if(s.indexOf(' ') == -1 ){
        return s.length;
    }else{
        return s.length - 1 - s.lastIndexOf(' ');
    }
};

//console.log(lengthOfLastWord(" hello "));
