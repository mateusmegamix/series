import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const SerieCard = ({serie, isFirstColumn, onPress}) => (
  <TouchableOpacity
    style={[
      styles.container,
      isFirstColumn ? styles.firstColumn : styles.lastColumn,
    ]}
    activeOpacity={0.9}
    onPress={onPress}>
    <View style={styles.card}>
      {serie.img ? (
        <Image
          style={styles.image}
          source={{
            uri: serie.img,
          }}
          aspectRatio={1}
          resizeMode="stretch"
        />
      ) : null}
      <View style={styles.cardTitleWrapper}>
        {serie.title.length <= 23 ? (
          <Text style={styles.cardTitle}>{serie.title}</Text>
        ) : (
          <Text style={styles.cardTitle}>{`${serie.title.substring(
            0,
            16,
          )}...`}</Text>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

export default SerieCard;
