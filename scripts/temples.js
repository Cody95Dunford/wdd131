const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
console.log("text");
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});