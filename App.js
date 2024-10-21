import { SafeAreaView } from 'react-native';
import Home from './screens/Home';
import Gameboard from './screens/Gameboard';
import Scoreboard from './screens/Scoreboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'transparent'}}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'information'
                : 'information-outline';
            } else if (route.name === 'Gameboard') {
              iconName = focused 
              ? 'dice-multiple' 
              : 'dice-multiple-outline';
            } else if (route.name === 'Scoreboard') {
              iconName = focused 
              ? 'view-list' 
              : 'view-list-outline';
            }

            return <MaterialCommunityIcons 
              name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#511e74',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} 
          options={{tabBarStyle: {display: 'none'}, headerShown: false}} />
        <Tab.Screen name="Gameboard" component={Gameboard}
          options={{headerShown: false}} />
        <Tab.Screen name="Scoreboard" component={Scoreboard}
          options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}