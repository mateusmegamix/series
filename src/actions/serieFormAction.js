//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

export const SET_WHOLE_SERIE = 'SET_WHOLE_SERIE';
export const setWholeSerie = serie => ({
  type: SET_WHOLE_SERIE,
  serie,
});

export const SET_FIELD = 'SET_FIELD'; //action type
export const setField = (field, value) => {
  return {
    type: SET_FIELD,
    field,
    value,
  };
};

export const SERIE_SAVED_SUCCESS = 'SERIE_SAVED_SUCCESS';
export const serieSavedSuccess = () => ({
  type: SERIE_SAVED_SUCCESS,
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
  type: RESET_FORM,
});

export const saveSerie = serie => {
  //usar autenticação com currentUser para extrair as informações que já estão no firebase
  const {currentUser} = firebase.auth();
  //usar databse com referencia (ref) para criar dados no firebase
  return async dispatch => {
    const db = firebase.database();
    try {
      if (serie.id) {
        await db // tem que esperar o código do firebase terminar de processar com o await
          .ref(`/users/${currentUser.uid}/series/${serie.id}`)
          .set(serie); //o set é o que fará o update
      } else {
        await db // tem que esperar o código do firebase terminar de processar com o await
          .ref(`/users/${currentUser.uid}/series`)
          .push(serie); //o push é o que manda o parametro para o banco para que seja salvo
      }
      dispatch(serieSavedSuccess());
    } catch (error) {
      console.log(error);
    }
  };
};
