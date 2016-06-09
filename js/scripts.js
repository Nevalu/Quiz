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
        if (0 <= result && result <= 25) {
            result2 = "Your best eerie destination is: ClassD! Click photo for info!"
            document.getElementById('div1').style.display = 'inline';
        }
        console.log("line 22");


        if (25 < result && result <= 50) {

            result2 = "Your best eerie destination is scp-1048! Click photo for website info!"
            document.getElementById('div2').style.display = 'inline';
        }

        // result2 =  "<href='http://www.scp-wiki.net/scp-1370'>SCP-1370</a><img src='img/classd.jpg' width='300'/>"

        if (50 < result && result <= 75) {
            result2 = "Your best eerie destination is: the robot! spooooky..... Click the pic!"
            document.getElementById('div3').style.display = 'inline';
        }



        // };


        if (75 < result && result <= 100) {
            result2 = "Your best eerie destination is nail polish? Weird. Click the photo for more info!"
            document.getElementById('div4').style.display = 'inline';
        }

        // result2 = ''<a href='http://www.scp-wiki.net/scp-294'>SCP-294</a><br/><img src='img/coffeemachine.jpeg' width='300' />''
        // };
        if (100 < result && result <= 125) {
            result2 = "Your best eerie destination is:79-100"
            document.getElementById('div5').style.display = 'inline';
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
