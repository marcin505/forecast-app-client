import * as axios from 'axios';
import { weatherURL, citySearch } from '../routes/routesDefinitions';
const apikey = 'iJ2s6KXFWURBhMLcF59iSGhukAghddZz';

export const citySearchRequest = query => (axios
    .get(`${weatherURL}${citySearch}?apikey=${apikey}&q=${query}&details=true`)
    .then(res => res.data)
);

// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=iJ2s6KXFWURBhMLcF59iSGhukAghddZz&q=Nashville&details=true