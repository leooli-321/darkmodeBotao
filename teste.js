

var button = document.getElementById("dn")
var isOrange = true;

button.addEventListener("click", function() {
if(isOrange) {
    document.body.style.backgroundColor = "black";
}else {
    document.body.style.backgroundColor = "white";
}
isOrange = !isOrange;
});