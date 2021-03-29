function myFunction(){
  var change = document.body;
  change.classList.toggle("light");

  var img_id = document.getElementById('swap');

  if (img_id.src.match("../images/icon-moon.svg")) {
      img_id.src = "../images/icon-sun.svg";
  }
  else {
      img_id.src = "../images/icon-moon.svg";
  }

}
