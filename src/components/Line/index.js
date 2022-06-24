import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Line = ({label = '', content = '-'}) => {
  return (
    <View style={styles.line}>
      <Text
        style={[
          styles.cell,
          styles.label,
          styles.length > 8 ? styles.longLabel : null,
        ]}>
        {label}
      </Text>
      <Text style={[styles.cell, styles.content]}>{content}</Text>
    </View>
  );
};

export default Line;
