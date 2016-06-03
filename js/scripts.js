
$(document).getElementById("form1").onsubmit=function() {
    variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
	   sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
	   con = parseInt(document.querySelector('input[name = "con"]:checked').value);


	   ifstate = parseInt(document.getElementById("ifstate").value);


	   result = variable + sub + con + ifstate;

	$(document).getElementById("grade").innerHTML = result;
	if (result == 0) {result2 = "location1.<br /><img src='something.jpg' width='300' />"};
    if (result == 25) {result2 = "location2.<br /><img src='somthingelse.jpg' width='300' />"};
    if (result == 50) {result2 = "location3.<br /><img src='somethingagian.jpg' width='300' />"};
    if (result == 75) {result2 = "location4<br /><img src='blargh.jpg' width='300' />"};
    if (result == 100) {result2 = "location5!<br /><img src='bluthalkr.jpg' width='300' />"};
    $(document).getElementById("grade2").innerHTML = result2;



return false;
}
