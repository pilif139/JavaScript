let addBtn = document.querySelector("#dodajOsobe");
let statystyka = document.querySelector("#Statystyka");

addBtn.addEventListener("click", ()=>{
    let input = prompt("Podaj imię");
    let osoba = document.createElement("div");
    osoba.classList.add("osoba");
    osoba.textContent = input;
    document.querySelector(".osoby").appendChild(osoba);
});

statystyka.addEventListener("click" , ()=>{
    let wszystkieOsoby = document.querySelectorAll(".osoba");
    const tablica = [];
    for (let i of wszystkieOsoby) {
        console.log(i.textContent);
        tablica.push(i.textContent);
    }
    console.log(tablica);

    for(let i = 0; i<tablica.length; i++){
        let ilosc = 0;
        for(let j=i; j<tablica.length-i; j++){
            if(tablica[j]==tablica[i]){
                ilosc++;
            }
        }
        document.getElementById("statystki").innerHTML += `${tablica[i]} występuje ${ilosc} razy w tabeli <br>`;
    }
});