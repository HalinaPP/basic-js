const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!members || members.length<1 || !Array.isArray(members)){
    return false;
  }
  const firstLetters = [];
  members.forEach(item => {
    if(typeof(item) === "string"){
      const name = item.trim();
      if(name.length<1){
        return false;
      }
       firstLetters.push(name[0].toUpperCase());
    }
  });
  firstLetters.sort();
  return firstLetters.join('');
};
