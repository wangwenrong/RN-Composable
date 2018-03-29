import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { HomeScreen } from './home';

export const Index = StackNavigator({
    /**
    * 首页
    */
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
});