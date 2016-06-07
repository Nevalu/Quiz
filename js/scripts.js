$(document).ready(function() {
    event.preventDefault();
    document.getElementById("form1").onsubmit = function() {
        variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
        sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
        con = parseInt(document.querySelector('input[name = "con"]:checked').value);
        cos = parseInt(document.querySelector('input[name = "cos"]:checked').value);
        tan = parseInt(document.querySelector('input[name = "tan"]:checked').value);

        result = Math.round((variable + sub + con + cos + tan) * 5);


        document.getElementById("grade").innerHTML = result;
        if (0 <= result && result <= 19) {
            result2 = "'<a href='http://www.scp-wiki.net/scp-1048'>SCP-1048</a>''<br/><img src='img/teddy.jpg' width='300' />"

        };
        if (19 < result && result <= 39) {
            result2 =  "'<a href='http://www.scp-wiki.net/scp-1370'>SCP-1370</a><img src='img/classd.jpg' width='300'/>"
        };
        if (39 < result && result <= 59) {
            result2 = "'<a href='http://www.scp-wiki.net/scp-1370'>SCP-1370</a><br/>''<img src='img/robot.jpg' width='300'/>"
        };


        if (59 < result && result <= 79) {
            result2 = "'<a href='http://www.scp-wiki.net/scp-294'>SCP-294</a><br/><img src='img/coffeemachine.jpeg' width='300' />"
        };
        if (79 < result && result <= 100) {
            result2 ="'<a href='http://www.scp-wiki.net/scp-SCP-829'>SCP-829</a><br/><img src='img/nailpolish.jpg' width='300' />"
        };


        (document).getElementById("grade2").innerHTML = result2;

        return false;

    }
});
