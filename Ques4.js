let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
document.getElementById("demoo").innerHTML =("before filter non unique elements:" +array);

let unique = [];
for (let i = 0; i < array.length; i++) {
  if (array.lastIndexOf(array[i]) === array.indexOf(array[i])) {
    unique.push(array[i]);
  }

}
document.getElementById("demoo1").innerHTML=("after filtering non unique elements:" +unique);

