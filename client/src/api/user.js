import axios from 'axios';

const url = 'https://memory-app-075.herokuapp.com/user';

export const signUp = (formdata) => axios.post(`${url}/signup`, formdata)


export const signIn = (formdata) => axios.post(`${url}/signIn`, formdata)

