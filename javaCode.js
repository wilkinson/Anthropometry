var alertme = function () {
    alert(parseInt(form1.FL.value) + parseInt(form1.HL.value) );
}

var form1 = document.getElementById("form1");

var confirm = document.getElementById("confirm");
//var flinput = document.getElementById("flInput");
//var crinput = document.getElementById("crInput");

confirm.onclick = alertme;

