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

  


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
  // add an edge case here.  Incase no images exist for that sol
        console.log(data.photos.length)
        
        
        let count = 0
        let timerID = setInterval(imgCarosel, 1500)
        
        function imgCarosel() {
            document.querySelector('img').src = data.photos[count].img_src;
            count++
            if(count === data.photos.length) {
              clearInterval(timerID)
            }
        }


        // End of .then
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

