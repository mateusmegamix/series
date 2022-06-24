/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import LoginPage from './pages/LoginPage';
import SeriePage from './pages/SeriePage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <Fragment>
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <StatusBar translucent barStyle="light-content" />
      </SafeAreaView>

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerMode: 'screen',
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              title: 'Bem Vindo',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="Main"
            component={SeriePage}
            options={{
              title: 'Séries',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 20,
              },
            }}
          />
          <Stack.Screen
            name="SerieForm"
            component={SerieFormPage}
            options={{
              title: 'Nova Série',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="SerieDetail"
            component={SerieDetailPage}
            options={({route}) => ({
              title: route.params.serie.title,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: 'black',
                borderBottomWidth: 1,
                borderBottomColor: 'black',
              },
              headerTitleStyle: {
                color: 'white',
                fontSize: 18,
              },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default AppContainer;
