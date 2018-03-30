import {STEP1, STEP2, STEP3, STEP4, STEP5 } from '../Actions/constraints';
import axios from 'axios'

 
export function saveProperty(obj){
     return axios.post(`/api/properties`, obj)
        .then(({ data }) => data)
        .catch(err => {
            console.error(err);
        })
    }
    
export function step1(obj){
    return {
        type: STEP1,
        payload: obj,
    }
}

export function step2(obj){
    return {
        type: STEP2,
        payload: obj,
    }
}

export function step3(obj){
    return {
        type: STEP3,
        payload: obj,
    }
}

export function step4(obj){
    return {
        type: STEP4,
        payload: obj,
    }
}

export function step5(obj){
    return {
        type: STEP5,
        payload: obj,
    }
}