import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from './components/TransactionListScreen';
import TransactionDetailScreen from './components/TransactionDetailScreen';
import SummaryScreen from './components/SummaryScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="Transactions List" 
        component={TransactionListScreen} 
        options={{ title: 'Transactions' }} 
      />
      <Stack.Screen 
        name="Transaction Detail" 
        component={TransactionDetailScreen} 
        options={{ title: 'Transaction Details' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsStack} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Summary" 
          component={SummaryScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}