import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from './routes'
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactIcon from 'react-native-vector-icons/Octicons';
import PortfolioIcon from 'react-native-vector-icons/Fontisto';
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Transact from '../screens/Transact/Home';
import Explore from '../screens/Explore/Home';
import Portfolio from '../screens/Portfolio/Home';
import Account from '../screens/Account/Home';

const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={routes.Explore} component={Explore} options={{
        headerShown: false,
        tabBarIcon: ({focused, props}) => (
          <Icon {...props} name="search" size={24} color= {focused ? 'green': 'black'} 
          />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12}
      }} />
      <Tab.Screen name={routes.Transact} component={Transact} options={{
        headerShown: false,
        tabBarIcon: ({focused, props}) => (
          <TransactIcon {...props} name="arrow-switch" size={25} color={focused ? 'green': 'black'} />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12}
      }} />
      <Tab.Screen name={routes.Portfolio} component={Portfolio} options={{
        headerShown: false,
        tabBarIcon: ({focused, props}) => (
          <PortfolioIcon {...props} name="pie-chart-2" size={25} color={focused ? 'green': 'black'} />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12}
      }} />
      <Tab.Screen name={routes.Account} component={Account} options={{
        headerShown: false,
        tabBarIcon: ({focused, props}) => (
          <AccountIcon {...props} name="account" size={28} color={focused ? 'green': 'black'} />
        ),
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {fontSize: 12}
      }} />
    </Tab.Navigator>
  )
}

export default BottomNavigation