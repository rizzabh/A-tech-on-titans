

// click

function clicka(){

    document.getElementById('a').style.opacity = 1;
    //makin everyone 0
    document.getElementById('b').style.opacity = 0;
    document.getElementById('c').style.opacity = 0;
    document.getElementById('d').style.opacity = 0;
}

function clickb(){

    document.getElementById('b').style.opacity = 1;
    //makin everyone 0
    document.getElementById('a').style.opacity = 0;
    document.getElementById('c').style.opacity = 0;
    document.getElementById('d').style.opacity = 0;
}

function clickc(){

    document.getElementById('c').style.opacity = 1;
    //makin everyone 0
    document.getElementById('a').style.opacity = 0;
    document.getElementById('b').style.opacity = 0;
    document.getElementById('d').style.opacity = 0;
}

function clickd(){

    document.getElementById('d').style.opacity = 1;
    //makin everyone 0
    document.getElementById('a').style.opacity = 0;
    document.getElementById('c').style.opacity = 0;
    document.getElementById('b').style.opacity = 0;
}
