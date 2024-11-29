/* --- Promise --- */


// Sample 1
let prom = new Promise((resolve, reject) => {
	let a = 1 + 3;
	if (a == 2) {
		resolve('addition successful');
	}
	else{
		reject('failed')
	}
})

prom.then((message) => {  //the 'message' parameter is what goes to resolve
	console.log('This is correct and the ' + message)
}).catch((errMsg) => {
	console.log(`This is wrong and catches the err ${errMsg}`)
})  // the 'errMsg' parameter is what goes to reject





// Sample 2
  function watchTutorialPromise() {
	let userLeft = false
	let userWatchingCatMeme = false
	return new Promise((resolve, reject) => {
	  if (userLeft) {
		reject({
		  name: 'User Left', 
		  message: ':('
		})
	  } else if (userWatchingCatMeme) {
		reject({
		  name: 'User Watching Cat Meme',
		  message: 'WebDevSimplified < Cat' 
		})
	  } else {
		resolve('Thumbs up and Subscribe')
	  }
	})
  }
  
  watchTutorialPromise().then(message => {
	console.log(`sucess: ` + message)
  }).catch(error => {
	console.log(error.name + ' ' + error.message)
  })
  


  // Sample 3
  const recordVideoOne = new Promise((resolve, reject) => {
	resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
	resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
	resolve('Video 3 Recorded')
  })
  
  Promise.all([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
  ]).then(messages => {
	console.log(messages)
  })
  
  Promise.race([
	recordVideoOne,
	recordVideoTwo,
	recordVideoThree
  ]).then(message => {
	console.log(message)
  })