const myKey = `0CeSttmV0IeGVJfqsMDiIgc1ITdbQXip8Vb6H24V`

// Event listener for the get random image button
document.querySelector('#get-random-button').addEventListener('click', getRandom)

//Fetch for the random image selector
function getRandom(){
 
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${Math.floor(Math.random()*2000)}&camera=NAVCAM&api_key=${myKey}`

// Get random image
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) // Console log for the time being to have access to image data
        console.log(data.photos.length)
        if (data.photos.length < 1) {
          //document.querySelector('h2').innerText = 'Sorry, there are now images that match your search.'
        } else {
          let count = Math.floor(Math.random()*data.photos.length)
          document.getElementById('get-random-image').src = data.photos[count].img_src;
          }
      })
      // End of .then

      .catch(err => {
          console.log(`error ${err}`)
      });
}

// ******* Place holder expressions for use with future development *******

// const roverName = document.querySelector('#rover-select').value
// const cameraChoice = document.querySelector('#cameras-select').value
// let cameraUrl  commented out because in this test it isn't being used (place holder ${Math.floor(Math.random()*2000)})
// const sol = document.querySelector('.sol').value

// if (cameraChoice === 'all') {
//   url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=${myKey}`
// } else {
//   cameraUrl = cameraChoice
//   url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${cameraUrl}&api_key=${myKey}`
// }

// ****** Image Carosel functions ******
//           let count = 0
//           let timerID = setInterval(imgCarosel, 1500)
//           function imgCarosel() {
//               document.getElementById('get-random-image').src = data.photos[count].img_src;
//               count++
//               if(count === data.photos.length) {
//                 clearInterval(timerID)
//               }
//             }