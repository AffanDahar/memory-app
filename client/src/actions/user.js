import * as api from "../api/user";
import { AUTH } from "../constants/actionTypes";

export const signUp = (formdata, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formdata);
    

    dispatch({ type: AUTH, data});
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};


export const signIn = (formdata, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formdata);
    

    dispatch({ type: AUTH, data});
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};
// data: { result, token }
