//foreach
console.log("Działanie funkcji forEach: ");

function printAllValues(values){
    values.forEach(function(value,index){
        console.log("Na pozycji " + index + " znajduje się " + value);
    })
}

array = [2,3,4,undefined,"Abraham"];

printAllValues(array);



//mapowanie
console.log("");
console.log("mapowanie sztywno");

const shoppingList = ["Jabłko","Banan","Śliwka"];
const numbers =[1,2,3,4,5];


const upper = [];
shoppingList.forEach(function(item){
    upper.push(item.toUpperCase());
})
console.log(upper)


const numberSquares = [];
numbers.forEach(function(item){
    numberSquares.push(item*item);
})
console.log(numberSquares);


//funkcja do mapowania
console.log("");
console.log("mapowanie: ");

function map(array,transformation){
    const newArray = [];
    array.forEach(function(item){
        newArray.push(transformation(item));
    })
    return newArray;
}

const upper2 = map(shoppingList, function(item){
    return item.toUpperCase();
})
console.log(upper2);


const numberSquares2 = map(numbers,function(item){
    return item*item;
})
console.log(numberSquares2);



//mapowanie z użyciem funkcji strzałkowych

console.log("");
console.log("mapowanie z użyciem funkcji strzałkowych: ");


const upper3 = shoppingList.map(item => item.toUpperCase());
console.log(upper3);

const numberSquares3 = numbers.map(item => item*item);
console.log(numberSquares3);

//funkcje strzałkowe ćwiczenia:

console.log("");
console.log("funkcje strzałkowe: ");

const times = (a,b) => a*b;
console.log(times(2,8));

