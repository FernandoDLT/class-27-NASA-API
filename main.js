// NASA API
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch() {
//    const choice = document.querySelector('input').value
//    const url = `https://api.nasa.gov/planetary/apod?api_key=uzkxsKRT1cHC8Ao9jv7ddcQEtwkjuvVnyxGODow5&date=${choice}`;

//    fetch(url)
//       .then(res => res.json())
//       .then(data => {
//          console.log(data)
//          const imgElement = document.querySelector('img')
//          const iframeElement = document.querySelector('iframe')
//          const explanationElement = document.querySelector('h3')

//          if (data.media_type === 'image') {
//             imgElement.src = data.hdurl
//             iframeElement.src  = ''
//          } else if (data.media_type === 'video') {
//             imgElement.src = ''
//             iframeElement.src = data.url
//          }

//          explanationElement.innerText = data.explanation
//       })
//       .catch(err => {
//       console.log(`error ${err}`)
//    })
// }

// NASA Api using ternary
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
   const choice = document.querySelector('input').value;
   const url = `https://api.nasa.gov/planetary/apod?api_key=uzkxsKRT1cHC8Ao9jv7ddcQEtwkjuvVnyxGODow5&date=${choice}`;

   fetch(url)
      .then(res => res.json())
      .then(data => {
         console.log(data);
         document.querySelector('img').src = (data.media_type === 'image') ? data.hdurl : '';
         document.querySelector('iframe').src = (data.media_type === 'video') ? data.url : '';
         document.querySelector('h3').innerText = data.explanation;
      })
      .catch(err => {
         console.log(`error ${err}`);
      })
}