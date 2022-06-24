//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {Alert} from 'react-native';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});

export const USER_LOGOUT = 'USER_LOGIN_LOGOUT';
const userLogout = () => ({
  type: USER_LOGOUT,
});

export const tryLogin =
  ({email, password}) =>
  dispatch => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        const action = userLoginSuccess(user);
        dispatch(action);
        console.log('Usuário Autenticado!', user);
        return user;
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          return new Promise((resolve, reject) => {
            Alert.alert(
              'Usuário não encontrado',
              'Deseja criar um cadastro com as informações inseridas?',
              [
                {
                  text: 'Não',
                  onPress: () => resolve(),
                  style: 'cancel', //iOS
                },
                {
                  text: 'Sim',
                  onPress: () => {
                    firebase
                      .auth()
                      .createUserWithEmailAndPassword(email, password)
                      .then(resolve())
                      .catch(reject());
                  },
                },
              ],
              {cancelable: false},
            );
          });
        }
        return new Promise.reject(error);
      });
  };
