const plus = document.querySelector("#minut_plus");
const minus = document.querySelector("#minut_minus");
const start = document.querySelector("#start");
const hours = document.querySelector("#hours");
const minuts = document.querySelector("#minuts");
const setMinuts = document.querySelector("#minutInput");
const setH = document.querySelector("#hoursInput");
const setTime = document.querySelector("#set-time");
let minCount = 0;
let hCount = 0;

plus.onclick = function(){
	console.log(this);
	minCount ++;
	if (minCount ==60){
		hCount ++;
		minCount = 0;
	}
	displayTime();
}

minus.onclick = minusFunc;


function minusFunc(){

	console.log("start minus")
	if (minCount > 0){
		minCount --;
		displayTime();
	}
	if (minCount == 0){
		if (hCount > 0){
			hCount --;
			minCount = 59;
			displayTime();
		}
	}
}

setTime.onclick = () =>{
	if (setMinuts.value){
		minCount = parseInt(setMinuts.value);
	}
	else{
		minCount = 0;
	}
	if (setH.value){
		hCount = parseInt(setH.value);
	}
	else {
		hCount = 0;
	}
	if (minCount < 0 || hCount < 0){
		alert("Нельзя вводить отрицательное число");
	}
	else{
		hCount += Math.floor(minCount/60);
		minCount = minCount%60;
		displayTime();
	}
}

start.onclick = () =>{
	plus.disabled = true;
	minus.disabled = true;
	console.log("zapusk knopki");
	const timer = window.setInterval(()=>{
		if (minCount == 0 && hCount == 0){
			alert("Отсчёт окончен.");
			plus.disabled = false;
			minus.disabled = false;
			clearInterval(timer);
		}
		minusFunc();
		displayTime();
		}, 1000);
	
	
	console.log("finish")
}

function displayTime(){
	hours.innerHTML = hCount;
	minuts.innerHTML = minCount;
}