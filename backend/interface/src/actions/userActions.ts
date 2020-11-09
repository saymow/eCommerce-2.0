import axios from 'axios';
import { Dispatch } from '../@types/redux';
import { userLoginAction } from '../@types/redux/user';

export const userLogin = (email: string, password: string) => async (
  dispatch: Dispatch<userLoginAction>
) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });

    await axios.post('/api/sessions', { email, password });

    dispatch({ type: 'USER_LOGIN_SUCCESS' });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'USER_LOGIN_FAIL', payload: err.response.data });
  }
};

export const getAuthStatus = () => async (
  dispatch: Dispatch<userLoginAction>
) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });

    await axios.post('/api/sessions/me/admin');

    dispatch({ type: 'USER_LOGIN_SUCCESS' });
  } catch (err) {
    console.log(err);
    dispatch({ type: 'USER_LOGOUT' });
  }
};