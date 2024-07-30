// Create six functions for each section that will be called on page load.

const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`

window.onload = function() {
  getRandomOne()
  getRandomTwo()
  getRandomThree()
  getRandomFour()
  getRandomFive()
  getRandomSix()
}

document.querySelector('#first-random-button').addEventListener('click', getRandomOne)
document.getElementById('second-random-button').addEventListener('click',getRandomTwo)
document.getElementById('third-random-button').addEventListener('click',getRandomThree)
document.getElementById('forth-random-button').addEventListener('click',getRandomFour)
document.getElementById('fifth-random-button').addEventListener('click',getRandomFive)
document.getElementById('sixth-random-button').addEventListener('click',getRandomSix)



//Fetch for the random image selector
function getRandomOne(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          // console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomOne()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('first-random-image').src = data.photos[count].img_src;
            document.getElementById('first-random-image').alt = `An image from the surface of Mars captured by Spirit on: ${data.photos[count].earth_date}`;
 document.getElementById('first-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomTwo(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          // console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomTwo()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('second-random-image').src = data.photos[count].img_src;
            document.getElementById('second-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomThree(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomThree()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('third-random-image').src = data.photos[count].img_src;
            document.getElementById('third-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFour(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomFour()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('forth-random-image').src = data.photos[count].img_src;
            document.getElementById('forth-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFive(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomFive()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('fifth-random-image').src = data.photos[count].img_src;
            document.getElementById('fifth-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomSix(){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            getRandomSix()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('sixth-random-image').src = data.photos[count].img_src;
            document.getElementById('sixth-photo-note').innerText = `Here is an image captured by Spirit on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }