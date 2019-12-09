
let photoOfTheDayCollection = []

export const usephotoOfTheDayCollection = () => {
   return photoOfTheDayCollection

   
}

const getPhotoOfTheDayCollection = () => {
   return fetch("https://api.nasa.gov/planetary/apod?api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW")
       .then(response => response.json())
       .then(
           parsedPhotos => {
               console.log(parsedPhotos)
               photoOfTheDayCollection = parsedPhotos
           }
       )
}









export default getPhotoOfTheDayCollection