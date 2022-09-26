// https://www.omnicalculator.com/everyday-life/crosswind

// calculators not working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const crosswindcomponentRadio = document.getElementById('crosswindcomponentRadio');
const winddirectionRadio = document.getElementById('winddirectionRadio');
const windspeedRadio = document.getElementById('windspeedRadio');

let crosswindcomponent;
let winddirection = v1;
let windspeed = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

crosswindcomponentRadio.addEventListener('click', function() {
  variable1.textContent = 'Wind direction';
  variable2.textContent = 'Wind speed';
  winddirection = v1;
  windspeed = v2;
  result.textContent = '';
});

winddirectionRadio.addEventListener('click', function() {
  variable1.textContent = 'Crosswind component';
  variable2.textContent = 'Wind speed';
  crosswindcomponent = v1;
  windspeed = v2;
  result.textContent = '';
});

windspeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Crosswind component';
  variable2.textContent = 'Wind direction';
  crosswindcomponent = v1;
  winddirection = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(crosswindcomponentRadio.checked)
    result.textContent = `Crosswind component = ${computecrosswindcomponent().toFixed(2)}`;

  else if(winddirectionRadio.checked)
    result.textContent = `Wind direction = ${computewinddirection().toFixed(2)}`;

  else if(windspeedRadio.checked)
    result.textContent = `Wind speed = ${computewindspeed().toFixed(2)}`;
})

// calculation

// crosswindcomponent = windspeed * sin(winddirection)

function computecrosswindcomponent() {
  return Number(windspeed.value) * Math.sin(Number(winddirection.value));
}

function computewinddirection() {
  return Number(crosswindcomponent.value) / Number(windspeed.value);
}

function computewindspeed() {
  return Number(crosswindcomponent.value) / Number(winddirection.value);
}