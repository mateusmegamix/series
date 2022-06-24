import React from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import GeneralStatusBarColor from '../../components/GeneralStatusBar';
import FormRow from '../../components/formRow';
//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {connect} from 'react-redux';
import {tryLogin} from '../../actions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'mateusp.1996@gmail.com.br',
      password: 'coltii123',
      isLoading: false,
      message: '',
    };
  }

  onChangeHnadler(field, input) {
    this.setState({
      [field]: input,
    });
  }

  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAUIP0AcZQlTQkRldHdhx_--IvOqBgxBXo',
      authDomain: 'series-cfff4.firebaseapp.com',
      projectId: 'series-cfff4',
      storageBucket: 'series-cfff4.appspot.com',
      messagingSenderId: '922404810581',
      appId: '1:922404810581:web:13eaa02cbe209da5cf89dc',
      measurementId: 'G-K424DFQ12H',
    };

    firebase.initializeApp(firebaseConfig);
  }

  messageSuccess() {
    Alert.alert('Erro', 'Usuário Autenticado', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  renderMessage() {
    const {message} = this.state;
    if (!message) {
      return null;
    }

    return (
      <View>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  }

  tryLogin() {
    console.log('caiu na função do login');
    this.setState({isLoading: true, message: ''});
    const {email: email, password} = this.state;

    this.props
      .tryLogin({email, password})
      .then(user => {
        //this.setState({message: 'Successo!'});
        if (user) {
          return this.props.navigation.replace('Main'); // se não colocar um return pode incrementar o else
        }
        this.setState({
          isLoading: false,
          message: '',
        });
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          message: this.getMessageByErrorCode(error.code),
        });
      });
  }

  getMessageByErrorCode(errorCode) {
    switch (errorCode) {
      case 'auth/wrong-password':
        return 'Senha Incorreta';
      case 'auth/user-not-found':
        return 'Usuário não encontrado';
      default:
        return 'Erro Desconhecido';
    }
  }

  rendeButton() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerButton}>
          <TouchableOpacity disabled style={styles.button}>
            <ActivityIndicator color={'#FFFFFF'} size={'small'} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.button}
            onPress={() => this.tryLogin()}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GeneralStatusBarColor
          backgroundColor="back"
          barStyle="light-content"
        />
        <Text style={styles.text}>Login</Text>
        <FormRow>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType={'email-address'}
            placeholderTextColor={'#CCC'}
            placeholder="user@mail.com"
            value={this.state.email}
            onChangeText={input => this.onChangeHnadler('email', input)}
          />
        </FormRow>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholderTextColor={'#CCC'}
            placeholder="******"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={input => this.onChangeHnadler('password', input)}
          />
        </FormRow>
        {this.rendeButton()}
        {this.renderMessage()}
      </View>
    );
  }
}

export default connect(null, {tryLogin})(LoginPage);
