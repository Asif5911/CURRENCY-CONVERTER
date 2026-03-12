const currencyList = [
"USD","INR","EUR","GBP","JPY","AUD","CAD","CHF","CNY","HKD",
"SGD","SEK","KRW","NZD","MXN","BRL","RUB","ZAR","TRY","SAR",
"AED","THB","MYR","IDR","PHP","VND","PKR","BDT","NPR","LKR",
"EGP","ILS","PLN","DKK","NOK","HUF","CZK","RON","ARS","CLP",
"COP","PEN","KWD","QAR","OMR","BHD","MAD","KES","GHS","UGX",
"TND","DZD","ETB","TZS","XOF","XAF","BWP","NAD","MUR","SCR",
"ISK","HRK","BGN","UAH","GEL","AMD","AZN","KZT","UZS","TJS"
];

const from = document.getElementById("from");
const to = document.getElementById("to");

currencyList.forEach(currency => {

let option1 = document.createElement("option");
option1.value = currency;
option1.text = currency;
from.appendChild(option1);

let option2 = document.createElement("option");
option2.value = currency;
option2.text = currency;
to.appendChild(option2);

});

from.value="USD";
to.value="INR";

document.getElementById("convert").onclick = async () => {

let amount = document.getElementById("amount").value;

if(!amount){
document.getElementById("result").innerText = "Enter amount first";
return;
}

let url = `https://open.er-api.com/v6/latest/${from.value}`;

let response = await fetch(url);
let data = await response.json();

let rate = data.rates[to.value];

let result = amount * rate;

document.getElementById("result").innerText =
`${amount} ${from.value} = ${result.toFixed(2)} ${to.value}`;

};

document.getElementById("swap").onclick = () => {

let temp = from.value;
from.value = to.value;
to.value = temp;

};
