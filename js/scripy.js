var expen =0;
function show(id) {
    if (document.getElementById) {
        var elemento = document.getElementById(id);
        elemento.style.display = 'block';
    }
}

function hide(id) {
    if (document.getElementById) {
        var elemento = document.getElementById(id);
        elemento.style.display = 'none';
    }
}

function swap(id1, id2) {
    hide(id1);
    show(id2);
    document.body.style.backgroundColor = '#a4a5a4';
    expen +=5.99;
    alert("usted ha gastado: "+expen);
}


window.onload = function () {}

function addclass(id, stilo) {
    document.getElementById(id).classList.add(stilo);
}
