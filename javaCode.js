var alertme = function () {
    alert(parseInt(flinput.value) + parseInt(crinput.value) );
}


var confirm = document.getElementById("confirm");
var flinput = document.getElementById("flInput");
var crinput = document.getElementById("crInput");

confirm.onclick = alertme;

