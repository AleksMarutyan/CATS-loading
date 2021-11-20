import { catsLoading,categLoading,setCategoris,setCats } from '../ducks/catsDuck';
import { setCurrentCategory } from './../ducks/catsDuck';

export function getCategories() {
  return async (dispatch) => {
    try {
    dispatch(categLoading());
    await fetch(`https://api.thecatapi.com/v1/categories`)
    .then((response) =>response.json())
    .then((result)=>{
       dispatch(setCategoris(result))
    })
    } catch (error) {
      console.log(error);
    } finally {
        dispatch(categLoading())    
    }
  };
}

export function getCats(category, page=0, limit=10, ) {
  return async (dispatch) => {
    try {
    dispatch(catsLoading());
    await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&category_ids=${category}`)
    .then((response) =>response.json())
    .then((result)=>{
       dispatch(setCats(result))
    })
    } catch (error) {
      console.log(error);
    } finally {
        dispatch(catsLoading())    
    }
  };
}