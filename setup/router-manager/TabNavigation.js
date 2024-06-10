import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Cash from '../screens/Portfolio/Holdings/HoldingsType/Cash';
import Debt from '../screens/Explore/Debt';
import Equity from '../screens/Explore/Equity/Equity';
import { createStackNavigator } from '@react-navigation/stack';

const TabNavigation = () => {
    <Tab.Navigator 
      screenOptions={{
        tabBarStyle: {
          paddingTop: 0,
          marginTop: 0
        },
        // tabBarLabelStyle: {padding: }
        tabBarLabelStyle: {
          margin: 0
        },
      }}
      
      >
      <Tab.Screen name="Cash" component={Cash}/>
      <Tab.Screen name="Debt" component={Debt} />
      <Tab.Screen name="Equity" component={Equity}/>
      </Tab.Navigator>
}

const HoldingStack = () => {
    
}
export default TabNavigation