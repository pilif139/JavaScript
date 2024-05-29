let output = document.querySelector("#output")

document.querySelector("#btn").addEventListener("click", function () {
    //inputy
    let biletyN = document.querySelector("#biletyN").value
    let biletyU = document.querySelector("#biletyU").value
    let godziny = document.querySelector("#godziny").value
    let kartaR = document.querySelector("#kartaR").checked

    let numberRegex = new RegExp("\\d")

    if (biletyN.match(numberRegex) && biletyN >= 0 && biletyU.match(numberRegex) && biletyU >= 0 && godziny.match(numberRegex) && godziny >= 0) {
        let cena = 0;
        biletyN -= Math.floor(biletyU / 15);
        if (godziny < 4) {
            cena += biletyN * godziny * 10;
            cena += biletyU * godziny * 5;
        }
        else {
            cena = biletyN * 50 + biletyU * 25;
        }

        if (kartaR) {
            cena *= 0.9;
        }

        output.style.color = "black";
        output.innerText = cena;
    }
    else{
        output.style.color = "red";
        output.innerText = "Błąd. Wprowadź poprawne dane.";
    }
});