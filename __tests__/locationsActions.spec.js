
import { citySearch } from '../src/redux/actions/locationsActions';

describe('>>>A C T I O N --- Test locationsActions', () => {
    it('+++ actionCreator addInputs', () => {
        const add = citySearch({ query: 'Oslo' })
        expect(add).toEqual({ type: "CITY_SEARCH", payload: {query: 'Oslo'}})
    });
});

