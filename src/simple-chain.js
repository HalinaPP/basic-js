const CustomError = require("../extensions/custom-error");

const chainMaker = {
  value:'',
  length:0,

  getLength() {
   return this.length;
  },

  addLink(value) {
    if(value === undefined){
      value = '';
    }
    this.value = this.value.length > 0  ? this.value+'~~( '+value+' )' : '( '+value+' )';
    this.length++;
    return this;

  },

  removeLink(position) {
    if( typeof(position)!=='number' || position < 1 || position > this.length){
      this.value = '';
      this.length=0;
      throw new Error('bad position value');
    }
    const chainArr =  this.value.split('~~');
    const removedArr = chainArr.slice(0,position-1).concat(chainArr.slice(position));
    this.value = removedArr.join('~~');
    this.length--;
    return this;
  },

  reverseChain() {
    this.value = this.value.split('~~').reverse().join('~~');
    return this;
  },

  finishChain() {
    const value = this.value;
    this.value = '';
    this.length=0;
    return value;
  }
};

module.exports = chainMaker;
