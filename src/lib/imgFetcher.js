export default async function ImgFetcher(weatherStatusPromise, isDay) {
    const weatherStatus = await weatherStatusPromise;
    const isItDaylight = await isDay;
    const daylight = isItDaylight ? 'day' : 'night';
    
    let sky;
    switch (weatherStatus) {
        case 'cloudy':
            sky = 'cloud';
            break;
        case 'rainy':
            sky = 'rain';
            break;
        case 'sunny':
            sky = 'clear';
            break;
        default:
            sky = 'clear';
    }
    const src = `/paris_${daylight}_${sky}.png`;
    return src;
}