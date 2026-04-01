import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';
import DeckOptionsModal from '../../components/DeckOptionsModal'

export default function HomeScreen() {

  const [decks, setDecks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDeck, setSelectedDeck] = useState(null);

  const deleteDeck = async (deckId: string) => {
    const updated = decks.filter(d => d.id !== deckId);
    await AsyncStorage.setItem('decks', JSON.stringify(updated));
    setDecks(updated);
  };

  const handleSave = async (updatedDeck: any) => {
    const updated = decks.map(d => d.id === updatedDeck.id ? updatedDeck : d);
    await AsyncStorage.setItem('decks', JSON.stringify(updated));
    setDecks(updated);
  };

  const handleDelete = async (deckId: string) => {
    const updated = decks.filter(d => d.id !== deckId);
    await AsyncStorage.setItem('decks', JSON.stringify(updated));
    setDecks(updated);
  };

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

      <Text style={styles.title}>Meine Decks</Text>

      <FlatList
        data={decks}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/deck/${item.id}`)}
            onLongPress={() => {
              setSelectedDeck(item);
              setModalVisible(true);
            }}
          >

            <LinearGradient
                colors={[item.color || '#4C0075', item.color + '88' || '#00000088']}
                style={styles.deckCard}
              >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.deckCount}>{item.cards?.length ?? 0} Karten</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/create')}>
        <Ionicons name="add" size={28} color="#6A00A3" />
      </TouchableOpacity>

      <DeckOptionsModal
        visible={modalVisible}
        deck={selectedDeck}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </View>
  );
}
