import axios from 'axios';

export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

export const fetchGreeting = () => dispatch => {
  axios.get('/api/random_greeting')
    .then(res => {
      dispatch({
        type: FETCH_GREETING_SUCCESS,
        payload: res.data.message
      })
    })
}
