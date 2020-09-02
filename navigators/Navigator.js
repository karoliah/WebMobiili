import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import Home from '../views/Home';
import Profile from '../views/Profile';

const Tab = createBottomTabNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>

            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>

        </NavigationContainer>
    );
};

export default Navigator;
