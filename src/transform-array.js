const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)){
    throw new Error('not array');
  }

//console.log('arr=',arr);
let discardNext = false;
let undefinedElement=false;
const transformArr = [];
   arr.map((item,index) => {
      if(discardNext){
        discardNext=false;
        undefinedElement = true;
        return;
      }
     switch (item){
        case '--discard-next':
          if(index+1 < arr.length){
            discardNext = true;
          }
          break;
        case '--discard-prev':
          if(transformArr.length>0 && !undefinedElement){
            transformArr.pop();
          }
          break;
        case '--double-next':
          if(index+1 < arr.length){
            transformArr.push(arr[index+1]);
          }
          break;
        case '--double-prev':
          if(transformArr.length>0 && !undefinedElement){
            transformArr.push(transformArr[transformArr.length-1]);
          }
          break;
        default:
          transformArr.push(item);
      }
      if(!discardNext){
        undefinedElement = false;
      }
      return;
  });


  return transformArr;
};
