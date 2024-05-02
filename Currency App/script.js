let base_currency = document.querySelector("#baseCurrency");
let ilosc = document.querySelector("#ilosc");
let convertedValues = document.querySelector("#convertedValues");

let country = {
    'USD': {
        symbol: '$',
        img: ""
    },
    'GBP': {
        symbol: '£',
        img: ""
    },
    'EUR': {
        symbol: '€',
        img: "",
    },
    'PLN': {
        symbol: 'zł',
        img: ""
    }
}


const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_pZs0oeNlR4tdFrUXelkdDuJHEnveEPlIL6IcAg8o&currencies=EUR%2CUSD%2CGBP%2CPLN&base_currency=${base_currency.value}`

let Data;
let DateTime;
fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        let time = new Date(data.meta.last_updated_at);
        document.querySelector("#time").textContent += `${time.getDay()}/${time.getMonth()}/${time.getFullYear()}`;
        DateTime = data.meta;
        Data = data.data;
    }).catch((err) => {
        console.log(err);
    })

function updateData() {
    convertedValues.textContent = '';
    for (const [key, value] of Object.entries(Data)) {
        if (base_currency.value != key) {
            console.log(`${key}: ${(value.value * ilosc.value).toFixed(2)} ${country[key].symbol}`);
            let div = document.createElement("div");
            div.textContent = `${key}: ${(value.value * ilosc.value).toFixed(2)} ${country[key].symbol}`;
            convertedValues.append(div);
        }
    }
}

document.querySelector("#search").addEventListener("click", updateData);

