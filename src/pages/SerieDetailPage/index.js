import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, Text} from 'react-native';
import Line from '../../components/Line';
import LongText from '../../components/LongText';
import styles from './styles';
import {connect} from 'react-redux';
import {deleteSerie} from '../../actions';

class SerieDetailPage extends React.Component {
  render() {
    const {route, navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          {route.params.serie.img ? (
            <Image
              style={styles.image}
              source={{uri: route.params.serie.img}}
              resizeMode="stretch"
            />
          ) : null}
          <Line label="Título: " content={route.params.serie.title} />
          <Line label="Gênero: " content={route.params.serie.gender} />
          <Line label="Nota: " content={route.params.serie.rate} />
          <View style={styles.longText}>
            <LongText
              label="Descrição: "
              content={route.params.serie.description}
            />
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.replace('SerieForm', {
                serieToEdit: route.params.serie,
              });
            }}
            activeOpacity={0.9}
            style={styles.buttonIconUpdate}>
            <View>
              <Image
                style={styles.image1}
                source={require('../../../resources/update.png')}
                aspectRatio={1}
                resizeMode="stretch"
              />
            </View>
            <Text style={styles.textIconUpdate}>Editar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              const hasDeleted = await this.props.deleteSerie(
                route.params.serie,
              );
              if (hasDeleted) {
                navigation.goBack();
              }
            }}
            activeOpacity={0.9}
            style={styles.buttonIconDelete}>
            <View>
              <Image
                style={styles.image2}
                source={require('../../../resources/delete.png')}
                aspectRatio={1}
                resizeMode="stretch"
              />
            </View>
            <Text style={styles.textIconDelete}>Excluir</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default connect(null, {deleteSerie})(SerieDetailPage);
