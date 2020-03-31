const render = dateCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="dateSelect">
            <option value="0">Please select a date...</option>
         ${dates.map(crime =>
        `<option value=${date.split(" ").join("-")}>${date}</option>`
    )}
        </select>
    `
}

render(dates)


export default dateSelect