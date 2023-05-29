import React from 'react';
import { View, Button, Text } from 'react-native';

export default function DashboardScreen({ handleLogout }) {
  const onLogout = () => {
    handleLogout();
  };

  return (
    <View style={{padding: 50}}>
      {/* Your dashboard content */}
      <Text>Dashboard</Text>
      <Button style={{marginTop: 40}} title="Logout" onPress={onLogout} />
    </View>
  );
}
