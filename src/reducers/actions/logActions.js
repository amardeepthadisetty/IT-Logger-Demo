import {
    GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, UPDATE_LOG, CLEAR_CURRENT,
    SEARCH_LOGS
} from './types';

/* export const getLogs = () => {
    return async (dispatch) => {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload : data
        });
    }

} */


//GET LOGS FROM SERVER
export const getLogs = () => async dispatch => {
    try {

        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
        
    } catch (error) {
        dispatch({
            type : LOGS_ERROR,
            payload : error.response.statusText
        });
    }
    
}

//ADD LOGS FROM SERVER
export const addLogs = ( log ) => async dispatch => {
    try {

        setLoading();

        const res = await fetch('/logs', {
            method: 'post',
            body: JSON.stringify(log),
            headers : {
                'Content-Type' : 'application/json'
            }
        } );
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
    
}

//DELETE LOGS FROM SERVER
export const deleteLogs = (id) => async dispatch => {
    try {

        setLoading();

        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        });
        

        dispatch({
            type: DELETE_LOG,
            payload: id
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}


//SET THE CURRENT REF TO LOG
export const setCurrent = log => async dispatch => {
    try {
        
        dispatch({
            type: SET_CURRENT,
            payload: log
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//update logs
export const updateLog = log => async dispatch => {
    try {

        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//SEARCH_LOGS
export const searchLog = search_term => async dispatch => {
    try {

        setLoading();
        const res = await fetch(`/logs?q=${search_term}`, {
            method: 'GET'
        });

        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        });
    }
}

//CLEAR_CURRENT
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}


export const setLoading = () =>{
    return {
        type: SET_LOADING
    }
}