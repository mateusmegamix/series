import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FFFA',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 50,
    color: 'black',
  },
  textInput: {
    width: 250,
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    color: 'black',
  },
  containerButton: {
    marginTop: 25,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
    width: 200,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  message: {
    color: 'black',
  },
});

export default styles;
