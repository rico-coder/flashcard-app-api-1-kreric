import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const [deck, setDeck] = useState(null);

  useEffect(() => {
    const loadDeck = async () => {
      const data = await AsyncStorage.getItem('decks');
      if (data) {
        const decks = JSON.parse(data);
        const found = decks.find(d => d.id === deckId);
        setDeck(found);
      }
    };
    loadDeck();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.title}>
        {deck ? deck.title : 'Deck nicht gefunden'}
      </Text>
      <Button title="Zurück" onPress={() => router.push('/')}/>
    </View>
  );
}