function myFunction(){
  var change = document.body;
  change.classList.toggle("light");
}

$("#swap").click(function () {
    $(this).attr('src', this.src.indexOf('icon-moon.svg') > -1 ? '../images/icon-sun.svg': '../images/icon-moon.svg')
})
