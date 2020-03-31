let dates = []

 export const useDates = () => {
    return dates

    
}

export const getDates = () => {
    return fetch("http://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                convictions = parsedConvictions.slice()
            }
        )
}

