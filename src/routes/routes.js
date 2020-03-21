import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import HomeView from '../components/Home/HomeView';
import OtherCountry from '../components/OtherCountry/OtherCountry';
import i18n from '../i18n/i18n';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#A3A3A3',
        labelStyle: {
          fontSize: 30,
        },
        style: {
          backgroundColor: '#AC5555',
          borderColor: 'rgba(140, 140, 140, 0.8)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen name={i18n.HOME} component={HomeView} />
      <Tab.Screen name={i18n.OTHER} component={OtherCountry} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default Routes;
