import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //flex: 0.5,
    padding: 5,
    width: '50%',
    height: Dimensions.get('window').width / 2,
  },
  image: {
    borderRadius: 10,
  },
  card: {
    borderRadius: 10,
  },
  cardTitleWrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    height: '15%',
    width: '100%',
    position: 'absolute',
    opacity: 0.9,
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    left: 2,
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});

export default styles;
