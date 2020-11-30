// importScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js')

function getQuote(qoute){
	const textQoute = `
	<div class="text text-lg-center">${qoute.text}</div>
	<div class="author">&#8212;  ${qoute.author}</div>
	`

	document.querySelector('#kutipan').innerHTML = textQoute;
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  	const kutipan = data;
  	const acak = Math.floor(Math.random() * kutipan.length);
  	const qoute = kutipan[acak];
  	getQuote(qoute);
  });

const refershBtn = document.querySelector('.refresh');
refershBtn.onclick = refresh;
function refresh(){
	location.reload();
}

const screenshotTarget = document.body
const screenshotBtn = document.querySelector('.screenshot')

screenshotBtn.onclick = getScreenshot;
function getScreenshot(){
html2canvas(document.querySelector("#kutipan"), {
	backgroundColor: '#ffc107',
  width: 1080,
  height:1080,


}).then(canvas => {
// console.log(canvas.toDataURL()) for check data img

//buat tag a
const a = document.createElement('a');

document.body.appendChild(a);
//masukan tautan ke atribut a yang isinya data img
a.href = canvas.toDataURL();
//string acak
let r = Math.random().toString(36).substring(7);
a.download = `my-image${r}.jpg`;

//event untuk klik donwload
a.click()
});
}

