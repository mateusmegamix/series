import {StyleSheet, Dimensions, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    width: '50%',
    height: Dimensions.get('window').width / 2,
  },
  card: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    borderRadius: 10,
    marginTop: 40,
    marginLeft: Platform.OS === 'ios' ? 50 : 40,
    height: '60%',
  },
  firstColumn: {
    paddingLeft: 10,
  },
  lastColumn: {
    paddingRight: 10,
  },
});

export default styles;
