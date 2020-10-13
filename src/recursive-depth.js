const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr, currLevel=0) {
    if(Array.isArray(arr)){
      currLevel++;
      let max=currLevel;
      for(let i=0;i<arr.length;i++){
        const depth = this.calculateDepth(arr[i], currLevel);
        max = Math.max(depth,max);
      }
      return max;
    }else{
      return currLevel;
    }
  }
};