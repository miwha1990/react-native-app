import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import {
    StyleSheet,
    Alert,
    Button,
    Text,
    FlatList,
    View,
    ActivityIndicator
} from 'react-native';

@inject('myStore')
@observer
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null
        }
    }
    _keyExtractor = (item, index) => item.id;
    componentWillMount() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }
    renderFlatListItem(item, index) {
        return (
            <Text key={index} >{item.title} + {index}</Text>
        )
    }
    render() {
        const { navigation, myStore } = this.props;
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={{flex: 1, backgroundColor: 'powderblue', alignItems: 'center', justifyContent:'center'}} >
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                </View>
                <View style={{flex: 2, backgroundColor: 'skyblue', alignItems: 'center', justifyContent:'center'}} >
                    <Button
                        onPress={() => navigation.navigate('SecondScreen')}
                        title="Go to Second Screen"
                    />
                </View>
                <View style={{flex: 3, backgroundColor: 'steelblue', alignItems: 'center', justifyContent:'center'}} >

                    <FlatList
                        data={this.state.dataSource}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item, index}) => <Text key={index}>{item.title}</Text>}
                    />

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        alignItems: 'center',
        fontSize: 30,
        textAlign: 'center',
        color: 'rgb(230,230,230)',
        marginBottom: 5,
    },
});
