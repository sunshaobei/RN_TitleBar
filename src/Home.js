import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import TitleBar from "./TitleBar";
import images from "./resource/images";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

    constructor(props) {
        super(props)
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <TitleBar title={'Home'} navigation={navigation} barStyle={'light-content'} backgroundColor={"red"}
                          titleColor={'white'} leftImage={require('./resource/image/back_white.png')}
                          right={'go'} pressRight={() => {
                    navigation.navigate('Second')
                }} hideLeftArrow={true}/>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});