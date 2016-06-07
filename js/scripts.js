$(document).ready(function() {
    event.preventDefault();
    document.getElementById("form1").onsubmit = function() {
        variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
        sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
        con = parseInt(document.querySelector('input[name = "con"]:checked').value);
        cos = parseInt(document.querySelector('input[name = "cos"]:checked').value);
        tan = parseInt(document.querySelector('input[name = "tan"]:checked').value);

        result = Math.round((variable + sub + con + cos + tan) * 100 / 20);

        document.getElementById("grade").innerHTML = result;
        if (0 < result && result <= 25) {
            result2 = "SCP-1370.<br/><img src='img/robot.jpg' width='300' />"
        };
        if (25 < result && result <= 50) {
            result2 = "SCP-1048.<br/><img src='img/teddy.jpg' width='300' />"
        };
        if (50 < result && result <= 75) {
            result2 = "SCP-294.<br/><img src='img/coffeemachine.jpg' width='300' />"
        };
        if (75 < result && result <= 100) {
            result2 = "'Ethics Committee Orientation<br /><a href=http://www.scp-wiki.net/ethics-committee-orientation src='img/classd.jpg' alt='Ethics Website'</a>' width='300' />"
        };
        if (100 < result && result <= 125) {
            result2 = "SCP-829<br/><img src='img/nailpolish.jpg' width='300' />"
        };
        if (125 < result && result <= 150) {
            result2 = "location5!<br/><img src='img/endofworld.jpg' width='300' />"
        };

        (document).getElementById("grade2").innerHTML = result2;

        return false;

    }
});
