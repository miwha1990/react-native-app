import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
@inject('myStore')
@observer
class SecondScreen extends Component{

    render() {
        const { navigation, myStore } = this.props;
        console.log(this.props, 'props');
        // console.log(store, 'store');
        return (

            <View style={style.container}>
                <Text>
                    THIS IS SECOND SCREEN!
                    {myStore.listCount}
                </Text>
            </View>
        )
    }

}
const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
})
SecondScreen.navigationOprions = {
    title: 'SecondScreen title'
};

export default observer(SecondScreen)