let x = 3.14;
let y = 5;
let z = 10;

//funkcje matematyczne:
// x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x);
// x = Math.sqrt(x);
// x = Math.abs(x);

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
console.log(`Maximum: ${x}, ${y}, ${z}: `+ maximum); //template literals `${}` grawis zamiast nawiasów

console.log(x);

// pitagoras
// let a,b,c;

// a = Number(window.prompt("Podaj bok a: "));
// b = Number(window.prompt("Podaj bok b: "));

// c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

// console.log(c)

document.getElementById("submitButton").onclick = () =>{

    a = document.getElementById("ATextBox").value;
    a = Number(a);
    b = document.getElementById("BTextBox").value;
    b = Number(b);

    c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

    document.getElementById("cLabel").innerHTML = "Bok C:"+c;
}