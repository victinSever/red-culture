function hasClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}

function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    } else {
        addClass(obj, cn);
    }
}


function getStyle(obj, name) {
    if (window.getComputedStyle)
        return getComputedStyle(obj, null)[name];
    else
        return obj.currentStyle[name];

}

//渐变动画
function move(obj, attr, target, speed, callback) {
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj, attr));
    if (current > target)
        speed = -speed;
    obj.timer = setInterval(function() {
        var oldValue = parseInt(getStyle(obj, attr));
        var newValue = oldValue + speed;
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if (newValue == target) {
            clearInterval(obj.timer);
            callback();
        }
    }, 30);
}

//改变状态
function toggleMenu(obj) {
    var begin = obj.offsetHeight;
    toggleClass(obj, "collapsed");
    var end = obj.offsetHeight;
    obj.style.height = begin + "px";
    move(obj, "height", end, 10, function() {
        obj.style.height = "";
    })
}


var menuSpan = document.querySelectorAll(".menuSpan");
var openDiv = menuSpan[0].parentNode;
for (var i = 0; i < menuSpan.length; i++) {
    menuSpan[i].onmouseover = function() {
        var parentDib = this.parentNode;
        toggleMenu(parentDib);
        if (openDiv != parentDib && !hasClass(openDiv, "collapsed")) {
            toggleMenu(openDiv);
        }
        openDiv = parentDib;
    }
}