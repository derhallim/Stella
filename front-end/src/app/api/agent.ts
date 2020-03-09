import axios, { AxiosResponse } from 'axios';
import IApartment from '../models/IApartment';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response :AxiosResponse) => response.data;
const requests = {
    get: (url: string) => axios.get(url).then(responseBody), 
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody), 
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody), 
    delete: (url: string) => axios.delete(url).then(responseBody)
}

const Apartments = {
    list: () : Promise<IApartment[]> => requests.get('/apartments'), 
    details: (id: string) => requests.get(`/apartments/${id}`), 
    create: (apartment: IApartment) => requests.post('/apartments', apartment), 
    update: (apartment: IApartment) => requests.put(`/apartments/${apartment.id}`, apartment), 
    delete: (id: string) => requests.delete(`/apartments/${id}`)
}


const Images = {
    list: () : Promise<IApartment[]> => requests.get('/apartments'), 
    details: (id: string) => requests.get(`/apartments/${id}`), 
    create: (base64String: string, fileName: string) => requests.post('/Images',{ base64String, fileName} ), 
    update: (apartment: IApartment) => requests.put(`/apartments/${apartment.id}`, apartment), 
    delete: (id: string) => requests.delete(`/apartments/${id}`)
}


export default {
    Apartments, 
    Images
}