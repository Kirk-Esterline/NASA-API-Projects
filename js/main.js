//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=503&camera=fhaz&api_key=${myKey}`
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.photos.length)
        
        
        let startCarosel = setInterval(imgCarosel, 100)
        let count = 0
        function imgCarosel() {
          document.querySelector('img').src = data.photos[count].img_src
          console.log(count)
          count++
        }
        if(count === data.photos.length-1) {
          clearInterval(startCarosel)
        }


        // End of .then
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

