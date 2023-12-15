var paragraph = document.getElementById('changeMe');

paragraph.innerHTML = "MY SANITY";
paragraph.style.color = 'greenyellow';
paragraph.style.background = "blue";

function makeParagraphRed()
{
paragraph.style.background = rgb(0,0,0);
}

paragraph.onclick = makeParagraphRed;

var currentMargin = 0;

function changeMargin()
{
    currentMargin++;
    paragraph.style.margin = (currentMargin*-1) + "px";
}

function reset()
{
    currentMargin = 0;
    paragraph.style.margin = "0px";
    clearInterval(animation);
}
document.getElementById('stop').onclick = reset;

var animation = setInterval(changeMargin,20);




var incrementColor = function(color, step){
    var colorToInt = parseInt(color.substr(1), 16),                     // Convert HEX color to integer
        nstep = parseInt(step);                                         // Convert step to integer
    if(!isNaN(colorToInt) && !isNaN(nstep)){                            // Make sure that color has been converted to integer
        colorToInt += nstep;                                            // Increment integer with step
        var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
        ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
        if(/^#[0-9a-f]{6}$/i.test(ncolor)){                             // Make sure that HEX is a valid color
            return ncolor;
        }
    }
    return color;
};
function changeBackground()
{
    paragraph.style.color = (ncolor);
}


var animation2 = setInterval(changeBackground,20);