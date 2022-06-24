import React from 'react';
import {
  View,
  TextInput,
  Text,
  Slider,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';
//import PickerSelection from '../../components/Picker';
import FormRow from '../../components/formRow';
import FormRowMultiline from '../../components/formRowMultiline';
import {connect} from 'react-redux';
import {setField, saveSerie, setWholeSerie, resetForm} from '../../actions';
import ImagePicker from 'react-native-image-picker';

class SerieFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      resourcePath: {},
    };
  }

  componentDidMount() {
    //route.params.serie.title
    //navigation.state.params.serie.title
    const {route, setWholeSerie, resetForm} = this.props;
    const {params} = route;
    if (params && params.serieToEdit) {
      return setWholeSerie(params.serieToEdit);
    }
    return resetForm();
  }

  async pickImage() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Permissão legal para câmera de aplicativo de foto',
          message:
            'O seriesApp precisa de acesso à sua câmera ' +
            'para que você possa tirar fotos incríveis.',
          buttonNeutral: 'Pergunte mais tarde',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Sim',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const options = {
          title: 'Selecione uma Imagem',
          cancelButtonTitle: 'Cancelar',
          takePhotoButtonTitle: 'Abrir câmera',
          chooseFromLibraryButtonTitle: 'Abrir galeria',
          storageOptions: {
            skipBackup: true,
            path: 'images',
            cameraRoll: true,
          },
        };
        ImagePicker.showImagePicker(options, response => {
          if (response.didCancel) {
            console.log('Usuario cancelou image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else {
            // You can also display the image using data

            this.props.setField('img', response.data);
          }
        });
      } else {
        console.log('Camera negado');
      }
    } catch (err) {
      console.warn(err);
    }
    console.log('Usuario deseja seleciona uma imagem');
  }

  renderButton() {
    if (!this.state.isLoading) {
      return (
        <FormRow>
          <View style={styles.containerButton}>
            <TouchableOpacity disabled style={styles.button}>
              <ActivityIndicator color={'#FFFFFF'} size={'small'} />
            </TouchableOpacity>
          </View>
        </FormRow>
      );
    }
    return (
      <FormRow>
        <View style={styles.containerButton}>
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.button}
            onPress={async () => {
              this.setState({isLoading: true});
              try {
                const {saveSerie, serieForm, navigation} = this.props;
                await saveSerie(serieForm);
                navigation.goBack();
              } catch (error) {
                Alert.alert('Erro!', error.message);
              } finally {
                this.setState({isLoading: false});
              }
            }}>
            <Text style={styles.textButton}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </FormRow>
    );
  }

  render() {
    const {serieForm, setField} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <FormRow first>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#CCC'}
              placeholder="Título"
              value={serieForm.title}
              onChangeText={value => setField('title', value)}
            />
          </FormRow>
          <FormRow>
            {/* {Platform.OS === 'ios' ? ( */}
            <TextInput
              style={styles.input}
              placeholderTextColor={'#CCC'}
              placeholder="URL da imagem"
              value={serieForm.img}
              onChangeText={value => setField('img', value)}
            />
            {/* ) : (
              <View>
                <Image
                  source={{uri: `data:image/jpeg;base64,${serieForm.img}`}}
                  style={styles.img}
                />
                <TouchableOpacity
                  style={styles.buttonImage}
                  onPress={() => {
                    this.pickImage();
                  }}>
                  <Text style={styles.textButtonImage}>
                    Selecione uma imagem
                  </Text>
                </TouchableOpacity>
              </View>
            )} */}
          </FormRow>
          <FormRow>
            <Text style={styles.inputGender}>Selecione um gênero: </Text>
            <Picker
              dropdownIconColor={'black'}
              dropdownIconRippleColor={'black'}
              style={styles.picker}
              selectedValue={serieForm.gender}
              onValueChange={itemValue => setField('gender', itemValue)}>
              <Picker.Item label="Ação" value="Acao" />
              <Picker.Item label="Aventura" value="Aventura" />
              <Picker.Item label="Comédia" value="Comedia" />
              <Picker.Item label="Dança" value="Danca" />
              <Picker.Item label="Documentário" value="Documentario" />
              <Picker.Item label="Drama" value="Drama" />
              <Picker.Item label="Espionagem" value="Espionagem" />
              <Picker.Item label="Faroeste" value="Faroeste" />
              <Picker.Item label="Fantasia" value="Fantasia" />
              <Picker.Item
                label="Ficção Científica"
                value="Ficcao Cientifica"
              />
              <Picker.Item label="Guerra" value="Guerra" />
              <Picker.Item label="Mistério" value="Misterio" />
              <Picker.Item label="Romance" value="Romance" />
              <Picker.Item label="Terror" value="Terror" />
            </Picker>
          </FormRow>
          <FormRow>
            <View style={styles.sameRow}>
              <Text style={styles.inputRate}>Nota: </Text>
              <Text style={styles.inputRate}>{serieForm.rate}</Text>
            </View>
            <Slider
              thumbTintColor={'#000'}
              minimumTrackTintColor={'black'}
              maximumTrackTintColor={'#CCC'}
              onValueChange={value => setField('rate', value)}
              value={serieForm.rate}
              minimumValue={0}
              maximumValue={100}
              step={5}
            />
          </FormRow>
          <FormRowMultiline>
            <TextInput
              style={styles.inputMultiline}
              placeholderTextColor={'#CCC'}
              placeholder="Descrição..."
              value={serieForm.description}
              onChangeText={value => setField('description', value)}
              multiline={true}
              maxLength={500}
            />
          </FormRowMultiline>
          {this.renderButton()}
        </View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  //Estados que vem do redurcers "index"
  return {
    serieForm: state.serieForm,
  };
}

const mapDispatchToProps = {
  //Novas acões (estados) que serão despachados
  setField,
  saveSerie,
  setWholeSerie,
  resetForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);
