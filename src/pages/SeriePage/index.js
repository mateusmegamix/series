import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import styles from './styles';
import AddSerieCard from '../../components/AddSerieCard';
import SerieCard from '../../components/SerieCard';

//import series from '../../mock/series.json';
import {connect} from 'react-redux';
import {watchSeries} from '../../actions';

const isEven = number => number % 2 === 0;

class SeriePage extends React.Component {
  componentDidMount() {
    this.props.watchSeries();
  }
  render() {
    const {series, navigation} = this.props;

    if (series <= 0) {
      return (
        <View style={styles.containerNotSerie}>
          <AddSerieCard onPress={() => navigation.navigate('SerieForm')} />
        </View>
      );
    }

    if (series === null) {
      return (
        <ActivityIndicator
          style={styles.loading}
          color={'black'}
          size={'large'}
        />
      );
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={[...series, {isLast: true}]} // Para incluir o último card
          renderItem={({item, index}) =>
            item.isLast ? (
              <AddSerieCard
                isFirstColumn={isEven(index)}
                onPress={() => navigation.navigate('SerieForm')}
              />
            ) : (
              <SerieCard
                serie={item}
                isFirstColumn={isEven(index)}
                onPress={() =>
                  navigation.navigate('SerieDetail', {serie: item})
                }
              />
            )
          }
          keyExtractor={item => item.id}
          numColumns={2}
          ListHeaderComponent={props => <View style={styles.marginTop} />}
          ListFooterComponent={props => <View style={styles.marginBottom} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  //Estados que vem do redurcers "index"
  const {series} = state;
  if (series === null) {
    return {series: null};
  }
  //O Object.keys é responsável de pegar objectos dos nodulos do firebase
  // e transformar em objetos parecidos com a tabela de um banco de dados
  //comum, como se construido com JSON
  const keys = Object.keys(series);
  const seriesWithKeys = keys.map(id => {
    return {...series[id], id};
  });
  return {
    series: seriesWithKeys,
  };
};

export default connect(mapStateToProps, {watchSeries})(SeriePage);
