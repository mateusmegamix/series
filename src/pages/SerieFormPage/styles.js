import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
  },
  input: {
    borderBottomWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    color: 'black',
    fontSize: 20,
  },
  inputGender: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    color: 'black',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  picker: {
    marginTop: 0,
    width: '100%',
    color: 'black',
  },
  inputRate: {
    marginTop: -20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    color: 'black',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  inputMultiline: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    fontSize: 20,
    color: 'black',
    borderBottomWidth: 1,
    borderColor: 'white',
  },
  sameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingBottom: 10,
  },
  containerButton: {
    backgroundColor: '#000000',
    borderRadius: 10,
    marginBottom: 80,
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    height: 50,
  },
  textButtonImage: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  img: {
    aspectRatio: 1,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#1E90FF',
  },
});

export default styles;
