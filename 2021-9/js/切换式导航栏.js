var liitem = document.getElementsByClassName("xlnav-li");
var boxitem = document.getElementsByClassName("xl-box");
var aitem = document.getElementsByClassName("xinlang-a");
boxitem[0].style.display = "block";
liitem[0].style.borderTop = "3px solid #ff8400";
liitem[0].style.borderLeft = "none";
liitem[0].style.borderRight = "1px solid #dbdee1";
liitem[0].style.backgroundColor = "white";
aitem[0].style.color = "#ff8400";
for (var i = 0; i < liitem.length; i++) {
    (function (i) {
        liitem[i].onmouseover = function () {
            for (var j = 0; j < boxitem.length; j++) {
                boxitem[j].style.display = "none";
                liitem[j].style.borderTop = "transparent";
                liitem[j].style.borderLeft = "none";
                liitem[j].style.borderRight = "none";
                liitem[j].style.backgroundColor = "transparent";
            }
            boxitem[i].style.display = "block";
            liitem[i].style.borderTop = "3px solid #ff8400";
            liitem[i].style.borderLeft = "1px solid #dbdee1";
            liitem[i].style.borderRight = "1px solid #dbdee1";
            liitem[i].style.backgroundColor = "white";
            if (i == 0) {
                liitem[i].style.borderLeft = "none";
            }
        }
    })(i)
}
for (var k = 0; k < liitem.length; k++) {
    (function (k) {
        aitem[k].onmouseover = function () {
            for (var l = 0; l < aitem.length; l++) {
                aitem[l].style.color = "black";
            }
            aitem[k].style.color = "#ff8400";
            if (k == 0) {
                liitem[k].style.borderLeft = "none";
            }
        }
        aitem[k].onmouseout = function () {
            aitem[k].style.color = "black";
        }
    })(k)
}