function getRandomColor() {
  let randomColor = '#' + Math.random();

  let codePannel = document.getElementById("codePannel");
  codePannel.innerHTML = randomColor;
}
getRandomColor();