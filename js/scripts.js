console.log("line 1");
$(document).ready(function() {
    console.log("line 3");
    event.preventDefault();
    console.log("line 5");
    document.getElementById("form1").onsubmit = function() {
        console.log("line 7");
        var sin = parseInt(document.querySelector('input[name = "sin"]:checked').value);
        var sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
        var con = parseInt(document.querySelector('input[name = "con"]:checked').value);
        var cos = parseInt(document.querySelector('input[name = "cos"]:checked').value);
        var tan = parseInt(document.querySelector('input[name = "tan"]:checked').value);

        result = Math.round((sin + sub + con + cos + tan) * 5);
        console.log("line 15");
        document.getElementById("grade").innerHTML = result;
        console.log("line 17");
        if (0 <= result && result <= 19) {
            result2 = "a";
            console.log("line 20");
        }
        console.log("line 22");
        // result2 = ''<a href="http://www.scp-wiki.net/scp-1048">SCP-1048 </a>''<br/><img src='img/teddy.jpg' width='300'/>'

        if (19 < result && result <= 39) {

            result2 =  "b";
        }

        // result2 =  "<href='http://www.scp-wiki.net/scp-1370'>SCP-1370</a><img src='img/classd.jpg' width='300'/>"

        if (39 < result && result <= 59) {
            result2 = "c";
        }


        //     result2 = '<href="http://www.scp-wiki.net/scp-1370">SCP-1370</a><br/>''<img src='img/robot.jpg' width='300'/>'
        // };


        if (59 < result && result <= 79) {
            result2 = "d";
        }

        // result2 = ''<a href='http://www.scp-wiki.net/scp-294'>SCP-294</a><br/><img src='img/coffeemachine.jpeg' width='300' />''
        // };
        if (79 < result && result <= 100) {
            result2 = "d";
        }


          //
          //     result2 ='<href='http://www.scp-wiki.net/scp-SCP-829'>SCP-829</a><br/><img src='img/nailpolish.jpg' width='300' />'
          // };


        console.log("line 56");
        (document).getElementById("grade2").innerHTML = result2;
        console.log("line 58");

        event.preventDefault();
        console.log("line 61");
        return false;

    };

});

