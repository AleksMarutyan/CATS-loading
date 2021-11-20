import { createAction, createReducer } from '../../helpers/redux';

// ACTION TYPES
const LOADING_CATS = 'LOADING_CATS';
const LOADING_CATEGORIES = "LOADING_CATEGORIES";
const SET_CATEGORIES = "SET_CATEGORIES";
const SET_CATS = "SET_CATS";
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

// ACTIONS
export const catsLoading = createAction(LOADING_CATS);
export const categLoading = createAction(LOADING_CATEGORIES);
export const setCategoris = createAction(SET_CATEGORIES)
export const setCats = createAction(SET_CATS);
export const setCurrentCategory = createAction(SET_CURRENT_CATEGORY);

const initialState = {
    cats: [],
    categories: [],
    loadingCats : false,
    loadingCategories: false,
    currentCategory: null,
}

// REDUCER
export const catsInfo = createReducer(initialState, (state, { value }) => ({
  [LOADING_CATS]: () => ({...state, loadingCats: !state.loadingCats }),
  [LOADING_CATEGORIES]: () => ({...state, loadingCategories: !state.loadingCategories }),
  [SET_CATS]: () =>({...state, cats: value}),
  [SET_CATEGORIES]: () => ({...state, categories: value}),
  [SET_CURRENT_CATEGORY]: ()=>({...state, currentCategory: value})
}));
