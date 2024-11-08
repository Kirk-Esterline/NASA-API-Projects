const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`

const loadingGif = 'public/loading-7528_128.gif'

// Event listener for the get random image button
document.querySelector('#get-random-button').addEventListener('click', getRandom)
document.querySelector('#MAST-random').addEventListener('click', () => getRandom('MAST'))

//Fetch for the random image selector
function getRandom(camera = 'NAVCAM'){
  document.getElementById('get-random-image').src = loadingGif
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=${camera}&api_key=${myKey}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) // Console log for the time being to have access to image data
        console.log(data.photos.length)

        if (data.photos.length < 1) { // If there are no photos on that day, the function will call itself again
          console.log('no photos on that day, ran the function again')
          getRandom()
        } else {   // Choosing and displaying an image from that day.
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

