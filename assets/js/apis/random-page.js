
// Create six functions for each section that will be called on page load.

const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`

window.onload = function() {
    alert('This is a page of 6 randomly selected images')
}

//Fetch for the random image selector
function getRandomOne(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomtwo(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomThree(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFour(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFive(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomSix(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandom()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('get-random-image').src = data.photos[count].img_src;
            document.getElementById('random-photo-note').innerText = `Here is an image captured by Curiosity on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }