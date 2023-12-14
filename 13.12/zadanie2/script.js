let addBtn = document.querySelector("#dodajOsobe");
let statystyka = document.querySelector("#Statystyka");

addBtn.addEventListener("click", ()=>{
    let input = prompt("Podaj imię");
    let osoba = document.createElement("div");
    osoba.classList.add("osoba");
    osoba.classList.add(`a${input}`); //a dlatego ze nazwa klasy nie moze byc liczba
    osoba.textContent = input;
    document.querySelector(".osoby").appendChild(osoba);
});

statystyka.addEventListener("click" , ()=>{
    let wszystkieOsoby = document.querySelectorAll(".osoba");
    const tablica = [];
    for (let i of wszystkieOsoby) {
        tablica.push(i.textContent);
    }
    tablica.sort();
    for (let i = 0; i < tablica.length; i++)
    {
        if(tablica == []){
            break;
        }
        let temp = tablica[i];
        let things = document.querySelectorAll(`.a${temp}`);
        document.getElementById("statystyki").innerHTML += `${temp} występuje w tablicy ${things.length} razy. <br>`;
        tablica.splice(0,things.length)
    }

});