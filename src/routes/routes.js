import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import HomeView from '../components/Home/HomeView';
import OtherCountry from '../components/OtherCountry/OtherCountry';
import i18n from '../i18n/i18n';
import Province from '../components/Province/Province';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={i18n.HOME}
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#A3A3A3',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          padding: 8,
          backgroundColor: '#AC5555',
          borderColor: 'rgba(140, 140, 140, 0.8)',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}>
      <Tab.Screen
        name={i18n.HOME}
        component={HomeView}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={i18n.PROVINCE}
        component={Province}
        options={{
          tabBarLabel: 'Province',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="city-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={i18n.OTHER}
        component={OtherCountry}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="dots-horizontal-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
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
