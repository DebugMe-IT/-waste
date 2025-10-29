import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {


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
        name="explore"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.2.circle" color={color} />
          ),
        }}
      />


    </Tabs>
  );
}
