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
	html2canvas(screenshotTarget).then((canvas) => {
		var string = canvas.toDataURL("image/png");
		var iframe = "<iframe style='background-color: #ffc107;color:dimgrey;' width='100wh' min-height='100vh' src='" + string + "'></iframe>"
		var x = window.open();
		x.document.open();
		x.document.write(iframe);
		x.document.close();
    // const base64image = canvas.toDataURL("image/png");
    // window.location.href = base64image;
    //referenc https://stackoverflow.com/questions/45493234/jspdf-not-allowed-to-navigate-top-frame-to-data-url
});
}
