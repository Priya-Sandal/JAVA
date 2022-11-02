for (i = 1; i <= 5; i++) {
  for (j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (k = 1; k <= i; k++) {
    document.write("*");
  }
  for (l = 1; l <= i; l++) {
    document.write("*");
  }
  document.write("<br>");
}