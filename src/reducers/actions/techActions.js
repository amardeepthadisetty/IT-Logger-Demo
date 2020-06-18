import {
    GET_TECHS, SET_LOADING, TECHS_ERROR, ADD_TECH, DELETE_TECH
} from './types';

export const getTechs = () => async dispatch =>{
    setLoading();

    try {
        const res = await fetch(`/techs`, {
            method: 'GET'
        });

        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });

        
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }

}


//ADD techs FROM SERVER
export const addTech = (tech) => async dispatch => {
    try {

        setLoading();

        const res = await fetch('/techs', {
            method: 'post',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }

}


//DELETE techs FROM SERVER
export const deleteTech = (id) => async dispatch => {
    try {

        setLoading();

        await fetch(`/techs/${id}`, {
            method: 'DELETE'
        });


        dispatch({
            type: DELETE_TECH,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        });
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

