import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const loadDeck = async () => {
      setLoading(true);
      const data = await AsyncStorage.getItem('decks');
      if (data) {
        const decks = JSON.parse(data);
        const found = decks.find((d: any) => d.id === deckId);
        setDeck(found);
        if (found) {
          setCards(found.cards);
        }
      }
      setLoading(false);
    };
    loadDeck();
  }, [deckId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#4A90E2" />;
  }

  if (!deck) {
    return <Text>Deck nicht gefunden</Text>;
  }

  return (
    <View style={styles.detailContainer}>
      <Text style={styles.detailTitle}>{deck.title}</Text>
      <FlatList
        data={cards}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={styles.cardQuestion}>{item.question}</Text>
            <Text style={styles.cardAnswer}>{item.answer}</Text>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
            <Text style={styles.backButtonText}>Zurück</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}