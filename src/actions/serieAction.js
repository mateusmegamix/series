//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import {Alert} from 'react-native';

export const SET_SERIES = 'SET_SERIES';
const setSeries = series => ({
  type: SET_SERIES,
  series,
});

export const watchSeries = () => {
  //usar autenticação com currentUser para extrair as informações que já estão no firebase
  const {currentUser} = firebase.auth();
  //usar databse com referencia (ref) para criar dados no firebase
  return dispatch => {
    firebase // tem que esperar o código do firebase terminar de processar com o await
      .database()
      .ref(`/users/${currentUser.uid}/series`)
      .on('value', snapshot => {
        const series = snapshot.val();
        const action = setSeries(series);
        dispatch(action); //neste "val" que contém os dados
      });
    //on responsavel por trazer os dados
    //"once" executa o callback apenas uma vez e "on" executa o value sempre que vier
  };
};

export const deleteSerie = serie => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Excluir',
        `Deseja excluir a serie ${serie.title}`,
        [
          {
            text: 'Não',
            onPress: () => {
              resolve(false);
            },
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: async () => {
              const {currentUser} = firebase.auth();
              try {
                await firebase
                  .database()
                  .ref(`/users/${currentUser.uid}/series/${serie.id}`)
                  .remove();
                resolve(true);
              } catch (error) {
                reject(console.log(error));
              }
            },
          },
        ],
        {cancelable: false},
      );
    });
  };
};
