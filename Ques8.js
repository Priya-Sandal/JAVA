function alpha(str) {
  let arr = str.split(""); // splits the string
  result = arr.sort().join(""); // sort the array and joins to form a string
  return result; // returns the result
}


document.write(alpha('webmaster'
))