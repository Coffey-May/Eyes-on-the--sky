import { usephotoOfTheDayCollection } from './PhotoofthedayProvider.js'


const photo1 = document.querySelector(".POTD")



const photoofthedaylistComponent = () => {
    const importedPhotoOfTheDayObject = usephotoOfTheDayCollection()
   
    photo1.innerHTML = `

   <div class="POTD"></div>

      <h2>P H O T O &nbsp&nbspO F&nbsp&nbsp T H E &nbsp&nbspD A Y</h2>
      <div>${importedPhotoOfTheDayObject.title}</div>
      <div>${importedPhotoOfTheDayObject.date}</div>
      <div>${importedPhotoOfTheDayObject.explanation}</div>
      <div>${importedPhotoOfTheDayObject.media_type}</div>
      <img src="${importedPhotoOfTheDayObject.url}">
      
    `
}



export default photoofthedaylistComponent



