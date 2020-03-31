let ChoosePhotoOfTheCollection = [];

export const UseChosenPhoto = () => ChoosePhotoOfTheCollection;

export const choosePhoto = date => {
    return fetch(
        `https://api.nasa.gov/planetary/apod?api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW&date=${date}`
    )
        .then(response => response.json())
        .then(parsedData => {
            ChoosePhotoOfTheCollection = parsedData;
        });
};