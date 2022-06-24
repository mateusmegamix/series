import React from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';

const PickerSelection = ({serieForm, setField}) => {
  return (
    <View>
      <Picker style={styles.picker}>
        <Picker.Item label="Ação" value="Acao" />
        <Picker.Item label="Aventura" value="Aventura" />
        <Picker.Item label="Comédia" value="Comedia" />
        <Picker.Item label="Dança" value="Danca" />
        <Picker.Item label="Documentário" value="Documentario" />
        <Picker.Item label="Drama" value="Drama" />
        <Picker.Item label="Espionagem" value="Espionagem" />
        <Picker.Item label="Faroeste" value="Faroeste" />
        <Picker.Item label="Fantasia" value="Fantasia" />
        <Picker.Item label="Ficção Científica" value="Ficcao Cientifica" />
        <Picker.Item label="Guerra" value="Guerra" />
        <Picker.Item label="Mistério" value="Misterio" />
        <Picker.Item label="Romance" value="Romance" />
        <Picker.Item label="Terror" value="Terror" />
      </Picker>
    </View>
  );
};

export default PickerSelection;
