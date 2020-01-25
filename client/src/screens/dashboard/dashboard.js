import React from 'react';
import {StatusBar, Platform} from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabBar, Tab, Layout, Text, Icon } from '@ui-kitten/components';

import Home from '../home/home';
import Messages from '../messages/messages';
import People from '../people/people';
import UserProfile from '../user-profile/user-profile';
import ProfileSettings from '../profile-settings/profile-settings';

function TabBarComponent({navigation}) {
	const onSelect = index => {
		const selectedTabRoute = navigation.state.routes[index];
		navigation.navigate(selectedTabRoute.routeName);
	};

	return (
		<TabBar selectedIndex={navigation.state.index} onSelect={onSelect}>
			<Tab icon={(style) => <Icon {...style} name='message-circle-outline'/>} />
			<Tab icon={(style) => <Icon {...style} name='people-outline'/>} />
			<Tab icon={(style) => <Icon {...style} name='settings-outline'/>} />
		</TabBar>
	);
};

export default createAppContainer(createBottomTabNavigator({
	Home,
	// ProfileSettings,
	UserProfile,
	Messages,
	People,
}, {
	tabBarComponent: TabBarComponent,
}));