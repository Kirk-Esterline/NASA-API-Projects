//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let url
  const roverName = document.querySelector('#rover-select').value
  const cameraChoice = document.querySelector('#cameras-select').value
  let cameraUrl 
  const sol = document.querySelector('.sol').value
  const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`

  if (cameraChoice === 'all') {
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${myKey}`
  } else {
    cameraUrl = cameraChoice
    url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${cameraUrl}&api_key=${myKey}`
  }

  

// Get random image
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       // console.log(data.photos.length)
        if (data.photos.length < 1) {
          document.querySelector('h2').innerText = 'Sorry, there are now images that match your search.'
        } else {
          console.log(data)
          let count = 0
          let timerID = setInterval(imgCarosel, 1500)
    
      // Add some contorls for the carosel so that the user can pause on an image.

          function imgCarosel() {
              document.querySelector('img').src = data.photos[count].img_src;
              count++
              if(count === data.photos.length) {
                clearInterval(timerID)
              }
          }

      }

        // End of .then
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

