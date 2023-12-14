const dniTygodnia = ["niedziela", "poniedziałek", "wtorek", "środa","czwartek","piątek","sobota"];

const ciekawostki1 = ["Lepiej zaliczać się do niektórych, niż do wszystkich." , "To, że milczę, nie znaczy, że nie mam nic do powiedzenia.",
"Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła" ];

const ciekawostki2 = ["bez pracy nie ma kołaczy", "xxdxdxdxdxdxdxdxdxd" ,"abcdefghijklmnoprstwiuuxasudazicjxzc"];

const ciekawostki3 = [ "zzzzzzzzzzzzzzzzzzzzzzzzz" , "xxxxxxxxxxxxxxxxxxxxxxxxxx", "ccccccccccccccccccccccccccccccccccccccc"];

let day = document.getElementById("dzień");
let data = new Date();
day.innerHTML += dniTygodnia[data.getDay()];

let ciekawostka = document.getElementById("ciekawostka");
let kategoria = prompt("Podaj kategorie ciekawostki (zwierzęta, matematyka, ogólne)");


switch(kategoria){
    case 'zwierzęta':
        ciekawostka.innerHTML = ciekawostki1[Math.floor(Math.random()*ciekawostki1.length)];
        break;
    case 'matematyka':
        ciekawostka.innerHTML = ciekawostki2[Math.floor(Math.random()*ciekawostki2.length)];
        break;
    case 'ogólne':
        ciekawostka.innerHTML = ciekawostki3[Math.floor(Math.random()*ciekawostki3.length)];
        break;
    default:
        ciekawostka.innerHTML = "<b>Nie znaleziono ciekawostek na ten temat.</b>";
        break;
}