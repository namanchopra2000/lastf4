
import { FETCH_DATA_SUCCESS , FETCH_DATA_FAILURE , FETCH_DATA_REQUEST } from "./actionTypes";



export const fetch_data_request = () => {
    return {
    type : FETCH_DATA_REQUEST }
}

export const fetch_data_success = (posts) => 
{
    return {
    type : FETCH_DATA_SUCCESS ,
    payload : posts
    }
}
export const fetch_data_failure = (error)=> {
    return {
    type : FETCH_DATA_FAILURE ,
    payload : error
}
}

export const fetchAll = () => {
return (dispatch) => {
    dispatch(fetch_data_request())
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => dispatch(fetch_data_success(data)))
    .catch(error => {
        dispatch(fetch_data_failure(error));
    })
} 
}