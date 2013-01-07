var alertme = function () {
    alert(parseInt(FL.value) + CR );
    //alert("help");
}

var form1 = document.getElementById("form1");

var submit = document.getElementById("submit");
//var flinput = document.getElementById("flInput");
//var crinput = document.getElementById("crInput");
var FL = document.getElementById("FL");
var CR = parseInt(document.getElementById("CR").value);

submit.onclick = alertme;

