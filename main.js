const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent="";
//console.log(splitText);
for (let i=0;i<splitText.length;i++) {
	text.innerHTML += "<span>"+ splitText[i] + "</span>";
}


let character = 0;
let timer = setInterval(onTick,50);

function onTick(){
	const span = text.querySelectorAll('span')[character];
	span.classList.add('fade');
	character++;
	if (character === splitText.length) 
	{
		complete();
		return;
	}
}
function complete(){
	clearInterval(timer);
	timer = null;
}