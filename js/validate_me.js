function validity(str) {
  var length = str.length;
  
  // match lowercase and uppercase chars
  for(var i = 0; i < length; i++) {
    if(!str[i].match(/[a-jZNLQR]/g)) {
      return false;
    }
  }
  
  if(length === 1) {
    return (str.match(/[a-j]/g));
  }
  
  if (str[0] === 'Z') {
    return (str.match(/[a-j]/g));
  }
  
  for (var i = 0; i < length; i++) {
    if (validity(str.slice(1)) && validity(str.slice(i + 2))) {
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
    if (validity(words[i])) {
      output += words[i] + " VALID<br>";
    } else {
      output += words[i] + " INVALID<br>";
    }
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
