function ConvertToCelsius(farenheit){
    const celsius = farenheit * .5556;
    return celsius;
}

function createMessage(farenheit, celsius){
    return `you entered ${farenheit} farenheit, that is equal to ${celsius}celsius.`;
}
const inputTemp = window.prompt("What degree in farenheit are you trying to convert to celsius?");

const convertedTemp = ConvertToCelsius(inputTemp);

console.log(createMessage(inputTemp, convertedTemp));