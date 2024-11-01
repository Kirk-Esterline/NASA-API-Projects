
// Create six functions for each section that will be called on page load.

const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`
const loadingGif = 'public/loading-7528_128.gif'


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

document.getElementById('FHAZ-one').addEventListener('click', () => getRandomOne('FHAZ'))
document.querySelector('#RHAZ-one').addEventListener('click', () => getRandomOne('RHAZ'))
document.querySelector('#MAST-one').addEventListener('click', () => getRandomOne('MAST'))
document.querySelector('#NAVCAM-one').addEventListener('click', () => getRandomOne('NAVCAM'))

document.querySelector('#FHAZ-two').addEventListener('click', () => getRandomTwo('FHAZ'))
document.querySelector('#RHAZ-two').addEventListener('click', () => getRandomTwo('RHAZ'))
document.querySelector('#MAST-two').addEventListener('click', () => getRandomTwo('MAST'))
document.querySelector('#NAVCAM-two').addEventListener('click', () => getRandomTwo('NAVCAM'))

document.querySelector('#FHAZ-three').addEventListener('click', () => getRandomThree('FHAZ'))
document.querySelector('#RHAZ-three').addEventListener('click', () => getRandomThree('RHAZ'))
document.querySelector('#MAST-three').addEventListener('click', () => getRandomThree('MAST'))
document.querySelector('#NAVCAM-three').addEventListener('click', () => getRandomThree('NAVCAM'))

document.querySelector('#FHAZ-four').addEventListener('click', () => getRandomFour('FHAZ'))
document.querySelector('#RHAZ-four').addEventListener('click', () => getRandomFour('RHAZ'))
document.querySelector('#MAST-four').addEventListener('click', () => getRandomFour('MAST'))
document.querySelector('#NAVCAM-four').addEventListener('click', () => getRandomFour('NAVCAM'))

document.querySelector('#FHAZ-five').addEventListener('click', () => getRandomFive('FHAZ'))
document.querySelector('#RHAZ-five').addEventListener('click', () => getRandomFive('RHAZ'))
document.querySelector('#MAST-five').addEventListener('click', () => getRandomFive('MAST'))
document.querySelector('#NAVCAM-five').addEventListener('click', () => getRandomFive('NAVCAM'))

document.querySelector('#FHAZ-six').addEventListener('click', () => getRandomSix('FHAZ'))
document.querySelector('#RHAZ-six').addEventListener('click', () => getRandomSix('RHAZ'))
document.querySelector('#MAST-six').addEventListener('click', () => getRandomSix('MAST'))
document.querySelector('#NAVCAM-six').addEventListener('click', () => getRandomSix('NAVCAM'))

//Fetch for the random image selector
function getRandomOne(camera = 'NAVCAM'){
    document.getElementById('first-random-image').src = loadingGif

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=${camera}&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          // console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('first-random-image').src = loadingGif
            getRandomOne()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('first-random-image').src = data.photos[count].img_src;
            // document.getElementById('first-random-image').innerHTML = `<img src="${data.photos[count].img_src}" alt="An image from the surface of Mars captured by Curiosity on: ${data.photos[count].earth_date}" />`;
            document.getElementById('first-random-image').alt = `An image from the surface of Mars captured by Curiosity on: ${data.photos[count].earth_date}`;
            document.getElementById('first-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomTwo(camera = 'NAVCAM'){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          // console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('second-random-image').src = loadingGif
            getRandomTwo()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('second-random-image').src = data.photos[count].img_src;
            document.getElementById('second-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomThree(camera = 'NAVCAM'){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('third-random-image').src = loadingGif
            getRandomThree()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('third-random-image').src = data.photos[count].img_src;
            document.getElementById('third-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFour(camera = 'NAVCAM'){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('fourth-random-image').src = loadingGif
            getRandomFour()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('forth-random-image').src = data.photos[count].img_src;
            document.getElementById('forth-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomFive(camera = 'NAVCAM'){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('fifth-random-image').src = loadingGif
            getRandomFive()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('fifth-random-image').src = data.photos[count].img_src;
            document.getElementById('fifth-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

function getRandomSix(camera = 'NAVCAM'){
 
    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`
  
  // Get random image
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data) // Console log for the time being to have access to image data
          console.log(data.photos.length)
          if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
            console.log('no photos on that day, ran the function again')
            document.getElementById('sixth-random-image').src = loadingGif
            getRandomSix()
          } else {
            let count = Math.floor(Math.random()*data.photos.length)
            document.getElementById('sixth-random-image').src = data.photos[count].img_src;
            document.getElementById('sixth-photo-note').innerText = `Here is an image Curiosity's ${camera} camera on: ${data.photos[count].earth_date}`;
            }
        })
        // End of .then
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }