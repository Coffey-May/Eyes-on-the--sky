import { usephotoOfTheDayCollection } from './PhotoofthedayProvider.js'


import  SinglePOTDPhotoComponent  from './PhotoOfTheDayComponent.js'


const photo1 = document.querySelector(".POTD")
let photohtml1 =" "

const photoofthedaylistComponent = () => {
    const importedPhotoOfTheDayObject = usephotoOfTheDayCollection()
    
    
    for (const singlePhoto of importedPhotoOfTheDayObject.photos) {
        const html =  SinglePOTDPhotoComponent(singlePhoto)
        photohtml1 += html1
    }

    // crimes.innerHTML += `
    //     ${
    //     criminalhtml.map(
    //         (crime) => {
    //             return SingleCrimainalComponent()
    //         }
    //     ).join(" # ")
    //     }
    // `
    photo1.innerHTML += `${photohtml1}`
}



export default photoofthedaylistComponent
