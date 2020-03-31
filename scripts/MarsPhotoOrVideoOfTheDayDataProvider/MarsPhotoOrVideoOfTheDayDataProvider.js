let marsPhotoOrVideoOfTheDayDataCollection = [];

export const useMarsPhotoOrVideoOfTheDay = () =>
    marsPhotoOrVideoOfTheDayDataCollection;

export const getMarsPhotoOrVideoOfTheDay = () => {
    return fetch(
        "https://api.nasa.gov/planetary/apod?api_key=OQVoYA1EvT6bzkuIVOO1ZD0ArKur93sPMQtLIOcW"
    )
        .then(response => response.json())
        .then(parsedData => {
            marsPhotoOrVideoOfTheDayDataCollection = parsedData;
        });
};