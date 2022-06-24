import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 20,
  },
  longText: {
    marginTop: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  buttonIconUpdate: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    height: 80,
    width: 80,
  },
  image1: {
    height: 30,
  },
  textIconUpdate: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 2,
    marginLeft: 5,
    color: 'black',
  },
  buttonIconDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
  },
  image2: {
    height: 30,
  },
  textIconDelete: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 2,
    color: 'black',
  },
});

export default styles;
