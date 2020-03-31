import { usePhotoCollection } from "./PhotoDataProvider.js"
import SinglePhotoComponent from "./PhotoComponent.js"




const photo = document.querySelector(".main-sections")
let photohtml =" "

const PhotoListComponent = () => {
    const importedPhotoObject = usePhotoCollection()
    
    
    for (const singlePhoto of importedPhotoObject.photos) {
        const html =  SinglePhotoComponent(singlePhoto)
        photohtml += html
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
    photo.innerHTML += `${photohtml}`
}



export default PhotoListComponent




