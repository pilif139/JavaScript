let btn = document.getElementById("dodajOsobe");
let osoby = document.getElementById("osoby");
let addBtn = document.querySelector("#addBtn");

btn.addEventListener("click", () => {
    document.querySelector("form").style.display == "flex" ? document.querySelector("form").style.display = "none" :
        document.querySelector("form").style.display = "flex";

    if (document.querySelector("#error").style.display == "flex") {
        document.querySelector("#error").style.display = "none";
    }
});

document.querySelector("#closeBtn").onclick = () => {
    document.querySelector("form").style.display = "none";
}

addBtn.addEventListener("click", () => {
    let imieNaziwsko;
    let opis;
    let plec;
    try {
        //wczytywanie danych
        imieNaziwsko = document.querySelector("#dane1").value;
        opis = document.querySelector("#dane2").value;
        plec = document.querySelector('input[name="plec"]:checked').value;
        if (imieNaziwsko == '' || opis == '') {
            throw new document.getElementById("error").style.display = "flex";
        }

        document.getElementById("error").style.display = "none";
        document.querySelector("form").style.display = "none";

        //tworzenie osoby
        let osoba = document.createElement("div");
        osoba.classList.add("osoba");
        osoby.appendChild(osoba);
        let imgOsoba = document.createElement("img");
        if (plec == "Mężczyzna") {
            imgOsoba.setAttribute("src", "img2.jpg");
        }
        else {
            imgOsoba.setAttribute("src", "img1.jpg");
        }
        osoba.appendChild(imgOsoba);
        osoba.innerHTML += `<div class="info"><h1>${imieNaziwsko}</h1><p>${opis}</p></div>`;

        //zerowanie wartosci
        document.querySelector("#dane2").value = null;
        imieNaziwsko = document.querySelector("#dane1").value = null;
        plec = document.querySelector('input[name="plec"]:checked').checked = false;
        imgOsoba = null;
    }
    catch {
        document.getElementById("error").style.display = "flex";
    }
});