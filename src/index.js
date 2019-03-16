module.exports = function check(str, bracketsConfig) {
  // your solution
  str = str + " ";
  for (let j = 0 ; j < bracketsConfig.length*bracketsConfig.length; j++) { 

    for (let i = 0 ; i < bracketsConfig.length; i++) {
      
      for (let q = 0 ; q < str.length ; q++) {
        let checkStr = bracketsConfig[i][0] + bracketsConfig[i][1];
        let checkStrIndex = str.indexOf(checkStr);

        if (checkStrIndex != -1) {
          str = str.split(checkStr).join('');
        }
      }
    }
  }
  if (str == " ")
    return true;
  else return false;
}
