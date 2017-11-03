/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import App from '../App'
import SecondScreen from '../SecondScreen'
import { StackNavigator } from 'react-navigation';

const stackNavigatorConfig = {
    initialRouteName: 'Home',
};
export default StackNavigator({
    Home: {screen: App},
    SecondScreen: { screen: SecondScreen, title: 'TITLE' }
}, stackNavigatorConfig);


