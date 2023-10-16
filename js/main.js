//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const roverName = document.querySelector('.rover-name').value
  let roverNameUrl = roverName

  const sol = document.querySelector('.sol').value
  const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverNameUrl}/photos?sol=${sol}&api_key=${myKey}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
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

