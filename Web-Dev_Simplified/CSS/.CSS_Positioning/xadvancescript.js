
// change theme dark or light

document.getElementById('dark-theme-btn').addEventListener('click', () => {
	//the event handler. i.e what it should do once handled.
	document.documentElement.style.setProperty('--background-color', '#333')
})

document.getElementById('light-theme-btn').addEventListener('click', () => {
	//the event handler. i.e what it should do once clicked.
	document.documentElement.style.setProperty('--background-color', 'white')
})
