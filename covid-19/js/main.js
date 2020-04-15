const positif = document.querySelector('#positif');
const sembuh = document.querySelector('#sembuh');
const meninggal = document.querySelector('#meninggal');


async function getData() {
    const response = await fetch('https://api.kawalcorona.com/indonesia/');
    const data = await response.json();
    positif.innerText = data[0].positif;    
    sembuh.innerText = data[0].sembuh;    
    meninggal.innerText = data[0].meninggal;    
}
getData();