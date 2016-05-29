window.onload = function() {

    var element = document.getElementById('newElement');
    var x = 0;

    var form = document.getElementById('form');
    form.elements["width"].onblur = function() {
        if(this.value>0) {
            element.style.width = this.value + 'px';
        }
    };

    form.elements["height"].onblur = function() {
        if(this.value>0) {
            element.style.height = this.value + 'px';
        }
    };




    //Hide
    document.getElementById("toggleHide").onclick = function() {
        if(x === 0) {
            element.style.display= "none";
            x = 1;
        } else if(x === 1) {
            element.style.display= "";
            x = 0;
        }

    };

    //Rotate Button
    function rotate() {
        element.style.transform = "rotate(" + deg + "deg)";
        deg+= 10;
    }
    var deg = 10;
    var y = 0;
    var rotateReset = document.getElementsByClassName("rotate-reset")[0];
    document.getElementsByClassName("rotate-btn")[0].onclick = function() {
        if(y === 0) {
            console.log("Turning now!");
            this.style.backgroundColor = "black";
            this.style.color = "white";
            this.style.transition = "0.4s";
            interval = setInterval(rotate,10);
            y = 1;
        } else if (y === 1) {
            this.style.backgroundColor= "#fff";
            this.style.color = "black";
            clearInterval(interval);
            y= 0;
            console.log("Turning stopped!");
            rotateReset.style.display = "inline-block";
        }
    };
    //rotate-reset
    rotateReset.onclick = function() {
        element.style.transform = "rotate(0deg)";
        this.style.display = "none";
    }

}