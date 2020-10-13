const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type=true){
    this.isReverse = type ? false : true;
  }

  encrypt(message, key) {
    if(message === undefined || key === undefined || message === '' || key === ''){
      throw new Error('not all parametrs given');
    }

    let encryptStr = '';
    const messageUpper = message.toUpperCase();
    const keyUpper = key.padEnd(messageUpper.length,key).toUpperCase();
    let j=-1;
    for(let i=0; i<messageUpper.length; i++){
      if(messageUpper[i].codePointAt(0)<65 || messageUpper[i].codePointAt(0)>92){
        encryptStr +=messageUpper[i];
        continue;
      }else{
        j++;
      }
      encryptStr += String.fromCodePoint((messageUpper[i].codePointAt(0)+ keyUpper[j].codePointAt(0)- 130) % 26+ 65);
    }
    return this.isReverse ? encryptStr.split('').reverse().join('') : encryptStr;
  }    

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined || encryptedMessage === '' || key === ''){
      throw new Error('not all parametrs given');
    }

    let encryptStr = '';
    const encryptedMessageUpper = encryptedMessage.toUpperCase();
    const keyUpper = key.padEnd(encryptedMessageUpper.length,key).toUpperCase();
    let j=-1;
    for(let i=0; i<encryptedMessageUpper.length; i++){
      if(encryptedMessageUpper[i].codePointAt(0)<65 || encryptedMessageUpper[i].codePointAt(0)>92){
        encryptStr +=encryptedMessageUpper[i];
        continue;
      }else{
        j++;
      }
      encryptStr += String.fromCodePoint((encryptedMessageUpper[i].codePointAt(0) - keyUpper[j].codePointAt(0)+26) % 26+ 65);
    }
    return this.isReverse ? encryptStr.split('').reverse().join('') : encryptStr;
  }
}

module.exports = VigenereCipheringMachine;
