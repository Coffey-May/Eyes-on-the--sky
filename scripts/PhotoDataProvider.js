

let marsPhotoCollection = []

 export const usePhotoCollection = () => {
    return marsPhotoCollection

    
}

 export const getPhotoCollection = () => {
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log(parsedPhotos)
                marsPhotoCollection = parsedPhotos
            }
        )
}


export const getPhotoCollection2 = () => {
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log(parsedPhotos)
                marsPhotoCollection = parsedPhotos
            }
        )
}




export const getPhotoCollection3 = () => {
    return fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW")
        .then(response => response.json())
        .then(
            parsedPhotos => {
                console.log(parsedPhotos)
                marsPhotoCollection = parsedPhotos
            }
        )
}
