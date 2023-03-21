const body = document.querySelector('body');
console.log(body);

const startBtn = document.querySelector('[data-action="start"]');
console.log(startBtn);

const stopBtn = document.querySelector('[data-action="stop"]');
console.log(stopBtn);

const colors = [
	'#FFFFFF',
	'#2196F3',
	'#4CAF50',
	'#FF9800',
	'#009688',
	'#795548',
];

let intervalValue = '';

//==============Generates random color index==============
const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

//==============Color changer==================
const colorChanger = function () {
	let randomColor = randomIntegerFromInterval(0, colors.length - 1);
	console.log(randomColor);

	body.style.backgroundColor = colors[randomColor];
	console.log('changer is active');
};

//==============Start button actions==============
startBtn.addEventListener('click', () => {
	console.log('click on start');

	intervalValue = setInterval(colorChanger, 1000);

	startBtn.disabled = true;
	stopBtn.disabled = false;
});

//==============Stop button actions==============
stopBtn.addEventListener('click', () => {
	console.log('click on stop');

	clearInterval(intervalValue);
	console.log('changer is disabled');

	startBtn.disabled = false;
	stopBtn.disabled = true;
});
