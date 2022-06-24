import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const AddSerieCard = ({serie, isFirstColumn, onPress}) => (
  <TouchableOpacity
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}
    activeOpacity={0.9}
    onPress={onPress}>
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../../../resources/add.png')}
        aspectRatio={1}
        resizeMode="stretch"
      />
    </View>
  </TouchableOpacity>
);

export default AddSerieCard;
