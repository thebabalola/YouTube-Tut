/* --- Async and Await */

function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`making request to ${location}`)
		if (location === 'Google'){
			resolve('google says hi')
		}
		else {
			reject('We can only talk on Google');
		}
	})
}


function processRequest(response){
	return new Promise((resolve, reject) => {
		console.log('processing response')
		resolve(`Extra Infromation + ${response}`)
	})
}


async function doWork(){
	try {
	let response = await makeRequest('Google')
	console.log('Response received');
	let processRes = await processRequest(response)
	console.log(processRes)
	}
	catch(err) {
		console.log(err) //logs the error that gets returned
	}
	
}

doWork();