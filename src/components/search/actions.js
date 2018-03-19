import { KEYWORD_SEARCH, LOCATION_SEARCH } from './reducers';
import { getPlacesByTextSearch } from '../../services/googleAPI';

export function searchByKeyword(query) {
  return dispatch => {
    getPlacesByTextSearch(query)
      .then(response => {
        console.log(response.results);
        dispatch({
          type: KEYWORD_SEARCH,
          payload: response.results
        });
      });
  };
}

