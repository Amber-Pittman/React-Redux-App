import { GET_ACTIVITY, GET_ACTIVITY_SUCCESS, GET_ACTIVITY_ERROR } from "";

export const initialState = {
    activity: null,
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_ACTIVITY:
        return {
            ...state,
            isLoading: true
        }
        case GET_ACTIVITY_SUCCESS:
            return {
                ...state,
                activity: action.payload,
                isLoading: false
            }
        case GET_ACTIVITY_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
  }
  

//   {
//     "activity": "Learn Express.js",
//     "accessibility": 0.25,
//     "type": "education",
//     "participants": 1,
//     "price": 0.1,
//     "link": "https://expressjs.com/",
//     "key": "3943506"
//   } 