/*
these funcs are just cycling through style formats
and chnaging each element such as:
backgroundColor="some color" which is just written as
document.getElementById.style.backgroundColor="Black";
Which just changes the elemnt
*/

function hideDokis() {
  var x = document.getElementsByClassName("bestWifus");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}

//Traditional Java comments allowed!
/* yippe! */
function showDokis() {
  var x = document.getElementsByClassName("bestWifus");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "";
  }
}

function changeDokis() {
  var x = document.getElementsByClassName("bestWifus");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor="Black";
    x[i].style.color="White";
  }
}

function revertDokis() {
  var x = document.getElementsByClassName("bestWifus");
  for (var i = 0; i < x.length; i++) {
    x[i].style.backgroundColor="Pink";
    x[i].style.color="Black";
  }
}

function displayTruth() {
  document.getElementById("trueDoki").innerHTML = "Monika is actually best!";
}
