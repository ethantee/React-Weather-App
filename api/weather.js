const apiKey = '72f818e70afa4d529d182029242405';
const apiURL = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.country}&days=${params.days}&aqi=no&alerts=no`;

// Private function to make an API call
const apiCall = async (URL) => { // async function to handle the promise
    const options = {
        method: 'GET',
        url: URL
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Error: ', error);
        return null;
    }
}

// Public function to fetch the weather forecast
export const fetchWeatherForecast = params => {
    return apiCall(apiURL(params));
}
