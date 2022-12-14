import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import theme from '../theme';

import { Receipts } from '../screens/Receipts';
import { Products } from '../screens/Products';
import { Upload } from '../screens/Upload';
import { Platform } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.RED_MAIN,
        tabBarInactiveTintColor: theme.COLORS.GRAY800,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.REGULAR
        }
      }}
    >
      <Screen
        name="Home"
        component={Products}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Novo pedido"
        component={Receipts}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-box"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Meus pedidos"
        component={Upload}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="playlist-add-check"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}