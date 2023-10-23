var paragraph = document.getElementById('changeMe');

paragraph.innerHTML = "MY SANITY";
paragraph.style.color = 'greenyellow';
paragraph.style.background = "blue";

function makeParagraphRed()
{
paragraph.style.background ='red';
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