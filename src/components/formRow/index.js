import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const FormRow = props => {
  const {children, first, last} = props;
  return (
    <View
      style={[
        styles.container,
        first ? styles.first : null,
        last ? styles.last : null,
      ]}>
      {children}
    </View>
  );
};

export default FormRow;
