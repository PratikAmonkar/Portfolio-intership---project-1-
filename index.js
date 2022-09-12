function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " resp";
    } else {
      x.className = "navbar";
    }
  }