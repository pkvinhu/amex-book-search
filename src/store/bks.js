import axios from 'axios';

const initialState = {
    titles: [],
    search: ''
};

// constants
const GET_BOOKS = 'GET_BOOKS';

// action creators
const getBooks = (books, search) => ({
  type: GET_BOOKS,
  books,
  search
})

// thunk creators
export const _getBooks = (search, category) => async dispatch => {
    const response = await axios.get(`http://openlibrary.org/search.json?${category}=${search}`)
    const books = [...response.data.docs];
    const action = getBooks(books, search);
    dispatch(action);
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BOOKS:
          return {
            titles: [...action.books],
            search: action.search
          }
        default:
          return state;
    }
}

export default reducer;