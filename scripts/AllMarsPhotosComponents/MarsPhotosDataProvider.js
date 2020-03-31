let marsPhotosDataCollection = [];

export const useMarsPhotosData = () => marsPhotosDataCollection;

export const getMarsCuriosityPhotos = () => {
    return fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW"
    )
        .then(response => response.json())
        .then(parsedData => {
            marsPhotosDataCollection = parsedData;
        });
};
export const getMarsOpportunityPhotos = () => {
    return fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW"
    )
        .then(response => response.json())
        .then(parsedData => {
            marsPhotosDataCollection = parsedData;
        });
};
export const getMarsSpiritPhotos = () => {
    return fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW"
    )
        .then(response => response.json())
        .then(parsedData => {
            marsPhotosDataCollection = parsedData;
        });
};