const gatunki = ["Ryby", "Płazy", "Gady", "Ptaki","Ssaki"]

const zwierzeta = [
    [
        "Dorada królewska", "Karp", "Dorsz"
    ],
    [
        "żaba wodna", "żaba jeziorkowa", "żaba smieszka"
    ],
    [
        "zolw", "krokodyl", "waz"
    ],
    [
        "Dzieciol", "Wrobel", "Gołąb"
    ],
    [
        "niedzwiedz", "sarna", "jelen"
    ]
]

let section = document.querySelector("section");

document.querySelector("nav > form > button").addEventListener("click", () => {
    section.innerHTML="";
    let gromada = document.getElementById("gromada").value;

    let img = document.createElement("img");
    img.src = `img/${gromada}.jpg`;
    section.append(img);

    let div = document.createElement("div")
    let naglowek = document.createElement("h2")
    naglowek.innerText = gatunki[gromada];
    div.append(naglowek);
    zwierzeta[gromada].forEach(element => {
        let p = document.createElement("p");
        p.innerText = element
        div.append(p);
    });
    section.append(div);

    let div2 = document.createElement("div");
    let naglowek2 = document.createElement("h2")
    naglowek2.innerText = "Wszystkie zwierzeta w bazie:"
    div2.append(naglowek2);
    let lista = document.createElement("ol");
    for(let i = 0; i<5;i++){
        zwierzeta[i].forEach(el=>{
            let li = document.createElement("li");
            li.innerText = el + ", "+gatunki[i];
            lista.append(li);
        })
    }
    div2.append(lista);
    section.append(div2);


});