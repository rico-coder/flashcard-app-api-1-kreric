import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {

  const [decks, setDecks] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadDecks = async () => {
        const data = await AsyncStorage.getItem('decks');
        if (data) {
          setDecks(JSON.parse(data));
        }
      };
      loadDecks();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen zur Flashcard-App</Text>
      <Button title="Deck erstellen" onPress={() => router.push('/create')} />

      <Text style={styles.subtitle}>Meine Decks</Text>

      <FlatList
        data={decks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => router.push(`/deck/${item.id}`)}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
  },
});