import { FETCH_DATA_SUCCESS , FETCH_DATA_FAILURE , FETCH_DATA_REQUEST } from "../actions/actionTypes"


const initialState = {
    loading : true ,
    posts : [],
    error :""
}

export const fetchReducer = (state = initialState , action) => {

    switch(action.type){
           case FETCH_DATA_REQUEST : return ({
                ...state , loading:true
            })

        case FETCH_DATA_SUCCESS :
            return ({
                ...state , loading: false , posts : action.payload , error : ""
            })
        case FETCH_DATA_FAILURE :
            return {
                ...state , loading:false , error : action.payload  ,posts:[]
            }

            default : return state

    }
}
