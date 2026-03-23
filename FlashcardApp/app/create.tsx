import React from 'react';
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function CreateDeckScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Deck erstellen</Text>
      <Button title="Zurück" onPress={() => router.push('/')}/>
    </View>
  );
}