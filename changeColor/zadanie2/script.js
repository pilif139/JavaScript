function zamien(){
    let tekst = document.getElementById('tekst').value;
    let size = document.getElementById('wielkosc').value;
    let czcionka = document.getElementById('font').value;
    let wynik = document.getElementById('wynik');
    wynik.style.fontSize = size+"px";
    wynik.style.fontFamily = czcionka;
    wynik.innerHTML = tekst;

}