function validity(str) {
  var length = str.length;
  
  // match lowercase and uppercase chars
  if(length === 1) {
    return str.match(/[a-j]/g);
  } else if(length > 2 && !str.slice(1).match(/[ZNLQR]/g)) {
    return false;
  }
  
  if (str[0] === 'Z') {
    return str.match(/[a-j]/g);
  } 
  
  for (var i = 0; i < length; i++) {
    if (validity(str.substr(1, i + 1)) && validity(str.substr(i + 2))) {
      return true;
    }
  }
  return false;
}

var output ='';
// split into words and check validity
function validateString(str) {
  var words = str.split(/\s/g);
  
  for(var i = 0; i < words.length; i++) {
    output += words[i] += validity(words[i]) ? " VALID<br>" : " INVALID<br>";
  }
}

// on document load, run validator
document.addEventListener('DOMContentLoaded', function(){
  validateString("Ze");
  validateString("Za Nj");
  validateString("QZja\nRhfa");
  validateString("QRZZaZZaj"); 
    
  document.getElementById('result').innerHTML = output;    
});
