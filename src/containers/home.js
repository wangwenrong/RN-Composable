import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { Page } from '../components/page';
import { Flex } from '../components/flex';


export class HomeScreen extends React.Component {
    static navigationOptions = {
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Page>
                <Flex></Flex>
            </Page>
        )
    }
}
