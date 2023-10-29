document.getElementById('red').onclick = () =>{
    document.body.style.backgroundColor = "red"
}

document.getElementById('aqua').onclick = () =>{
    document.body.style.backgroundColor = "aqua"
}

document.getElementById('black').onclick = () =>{
    document.body.style.backgroundColor = "black"
}

document.getElementById('orange').onclick = () =>{
    document.body.style.backgroundColor = "orange"
}

document.getElementById('btn').onclick = function(){
    let kolor = document.getElementById('kolorek').value;
    document.body.style.backgroundColor = kolor;
}
