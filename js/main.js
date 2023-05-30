var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree")
var span = document.getElementsByClassName("modal__close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
btnTwo.onclick = function () {
    modal.style.display = "block";
}
btnThree.onclick = function () {
    modal.style.display = "block";
}
btnFour.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}