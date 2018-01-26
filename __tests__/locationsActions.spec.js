
import { citySearch, citySearchSuccess } from '../src/redux/actions/locationsActions';

describe('>>>A C T I O N --- Test locationsActions', () => {
    it('+++ actionCreator citySearch', () => {
        const received = citySearch({ query: 'Oslo' });
        const expected = { type: "CITY_SEARCH", payload: {query: 'Oslo'}};
        expect(received).toEqual(expected);
    });
    it('+++ actionCreator citySearchSuccess', () => {
        const cities = []
        const received = citySearchSuccess({ cities })
        const expected = { type: "CITY_SEARCH_SUCCESS", payload: {cities}};
        expect(received).toEqual(expected);
    });
});
