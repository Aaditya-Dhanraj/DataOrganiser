import {fetchError, fetchStart, fetchSuccess} from '../../redux/actions';
import React from 'react';
import axios from '../../util/Api';
import {SET_AUTH_USER_DATA, UPDATE_LOAD_USER, USER_TOKEN_SET} from "../../constants/ActionTypes";
import {Cookies} from 'react-cookie'

export const setAuthUser = user => {
  return dispatch => {
    dispatch({
      type: SET_AUTH_USER_DATA,
      payload: user,
    });
  };
};

export const updateLoadUser = () => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOAD_USER,
    });
  };
};
export const setAUthToken = token => {
  return dispatch => {
    dispatch({
      type: USER_TOKEN_SET,
      payload: token,
    });
  };
};

export const onRegister = ({name, email, password}) => {
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('auth/register', {
        email: email,
        password: password,
        name: name,
      })
      .then(({data}) => {
        if (data.result) {
          if (data.token.access_token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
            const cookies = new Cookies();
            cookies.set('token', data.token.access_token);
          }
          dispatch({
            type: USER_TOKEN_SET,
            payload: data.token.access_token
          });
          dispatch(fetchSuccess());
          getAuthUser(dispatch);
        } else {
          dispatch(fetchError("Some thing went wrong!"));
        }
      })
      .catch(function (error) {
        dispatch(fetchError(error.message));
      });
  };
};

export const onLogin = ({email, password}) => {
  return dispatch => {
    try {
      dispatch(fetchStart());
      axios
        .post('auth/login', {
          email: email,
          password: password,
        })
        .then(({data}) => {
          console.log("onLogin: ", data);
          if (data.result) {
            dispatch(fetchSuccess());
            if (data.token.access_token) {
              const cookies = new Cookies();
              cookies.set('token', data.token.access_token);
              dispatch({
                type: USER_TOKEN_SET,
                payload: data.token.access_token
              });
              axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token.access_token;
              getAuthUser(dispatch);
            }
          } else {
            dispatch(fetchError(data.error));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(error.message));
        });
    } catch (error) {
      dispatch(fetchError(error.message));
    }
  };
};


export const onLogout = (route) => {
  console.log("onLogout");
  return dispatch => {
    dispatch(fetchStart());
    axios
      .post('auth/logout')
      .then(({data}) => {
        console.log("onLogout", data);
        if (data.result) {
          route.push("/signin");
          dispatch({
            type: USER_TOKEN_SET,
            payload: null
          });
          dispatch(fetchSuccess());
          const cookies = new Cookies();
          cookies.remove('token');
          dispatch(setAuthUser(null));
        } else {
          console.log("onLogout data.error", data.error);
          const cookies = new Cookies();
          cookies.remove('token');
          dispatch(setAuthUser(null));
          dispatch(fetchError(data.error));
        }
      })
      .catch(function (error) {
        console.log("onLogout error", error);
        const cookies = new Cookies();
        cookies.remove('token');
        dispatch(setAuthUser(null));
        dispatch(fetchError(error.message));
      });
  };
};

export const getAuthUser = (dispatch) => {
  dispatch(fetchStart());
  axios
    .post('auth/me')
    .then(({data}) => {
      console.log("getAuthUser: ", data.user)
      if (data.result) {
        dispatch(fetchSuccess());
        dispatch(setAuthUser(data.user));
      } else {
        dispatch(updateLoadUser());
      }
    })
    .catch(function (error) {
      dispatch(updateLoadUser());
    });
};
export const getAuthUser0 = (loaded = false, token) => {
  return dispatch => {
    if (!token) {
      const token = getCookie('token');
      if (token)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
    dispatch(fetchStart());
    dispatch(updateLoadUser(loaded));
    axios
      .post('auth/me')
      .then(({data}) => {
        if (data.result) {
          dispatch(fetchSuccess());
          dispatch(setAuthUser(data.user));
        } else {
          dispatch(updateLoadUser(true));
        }
      })
      .catch(function (error) {
        dispatch(updateLoadUser(true));
      });
  };
};
