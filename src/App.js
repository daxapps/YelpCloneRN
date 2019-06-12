import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Main } from './components/screens';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator(
	{
		Nearby: Main,
		Search: Main,
		Me: Main,
		Delivery: Main,
		More: Main
	},
	{}
);

export class App extends Component {
	render() {
		return (
			<View>
				<Main />
			</View>
		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: '#fff',
// 		alignItems: 'center',
// 		justifyContent: 'center'
// 	}
// });

export default createAppContainer(TabNavigator);
