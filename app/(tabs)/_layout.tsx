import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',           // active tab color
        tabBarInactiveTintColor: 'white',         // inactive tab color
        tabBarStyle: { backgroundColor: '#0a190bff' }, // dark green tab background
        tabBarButton: HapticTab,                  // haptic feedback on press
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="sell-waste"
        options={{
          title: 'Sell',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="trash" color={color} />,
        }}
      />

      <Tabs.Screen
        name="buy-recycled"
        options={{
          title: 'Buy',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.circle.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="search" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
