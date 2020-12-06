class array {
   isUnique = (str) => {
    const isUniqueIndicator = {};
    str = str.replace(/\s+/g, '');

    [...str].forEach(element => {
      if(!(element in isUniqueIndicator)) {
        isUniqueIndicator[element] = true;
      }
      else {
        isUniqueIndicator[element] = false;
      }
    });
  
    for (let s in isUniqueIndicator) {
      if(isUniqueIndicator[s] === false) return false;    
    }
  
    return true;
  }
    
}

module.exports = array;


//**
// Check if key exists in an object:
// var obj = { key: undefined };
// obj["key"] !== undefined // false, but the key exists!
// You should instead use the in operator:
//"key" in obj // true, regardless of the actual value
//**

// to make foreach on string, we need to copy it to an array and then loop :  [...str].forEach(element => {...})