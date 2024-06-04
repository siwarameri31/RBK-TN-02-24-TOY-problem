/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 * 
 * 
 * const firstNonRepeatedCharacter = function (string) {
  // TODO: your solution here
    for (i=0 ; i<string.length ; i++){
       
    if (string.indexOf(string[i])===string.lastIndexOf(string[i]) ){
     
        return string[i]  
    }
     
    }
     return ''
    }
 * 
 * 
 * 
 */
const firstNonRepeatedCharacter = function (string) {
 

  for (i=0 ; i<string.length ; i++){
    var char =string[i]
if (string.indexOf(char)===string.lastIndexOf(char) ){
    return char
    
}
 
}
return ''


}


