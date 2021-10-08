import axios from 'axios';

const url = 'http://localhost:5000/user';

export const signUp = (formdata) => axios.post(`${url}/signup`, formdata)


export const signIn = (formdata) => axios.post(`${url}/signin`, formdata)

