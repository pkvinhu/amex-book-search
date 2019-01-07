import axios from 'axios';

const initialState = [];

// constants
const GET_BOOKS = 'GET_BOOKS';

// action creators
const getBooks = books => ({
  type: GET_BOOKS,
  books
})

// thunk creators
export const _getBooksByTitle = input => async dispatch => {
    input = input.includes(' ') ? input.replace(' ', '+') : input;
    const response = await axios.get(`http://openlibrary.org/search.json?q=${input}`)
    console.log('From store: ', response.data.docs);
    const books = [...response.data.docs];
    const action = getBooks(books);
    dispatch(action);
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case GET_BOOKS:
          return [
            ...action.books
          ]
        default:
          return state;
    }
}

export default reducer;