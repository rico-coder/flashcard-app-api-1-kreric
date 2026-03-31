import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles';

export default function CreateDeckScreen() {
    const [title, setTitle] = useState('');

    const getRandomColor = () => {
      const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C', '#E67E22', '#E91E63'];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const saveDeck = async () => {
      if (!title.trim()) {
          Alert.alert('Fehler', 'Eingabe Feld leer')
          return;
      }
      // 1. Load existing decks (or empty array if none saved yet)
      const existing = await AsyncStorage.getItem('decks');
      const decks = existing ? JSON.parse(existing) : [];

      // 2. Create the new deck object
      const newDeck = {
        id: Date.now().toString(),
        title: title.trim(),
        color: getRandomColor(),
        cards: [
            { question: 'Was ist React Native?', answer: 'Ein Framework zur App-Entwicklung mit JavaScript.' },
            { question: 'Was macht useState?', answer: 'Es speichert lokale Zustände in einer Komponente.' },
            { question: 'Wofür ist AsyncStorage?', answer: 'Zum Speichern von Daten lokal auf dem Gerät.' },
          ],
      };

      // 3. Add new deck to the list and save
      const updated = [...decks, newDeck];
      await AsyncStorage.setItem('decks', JSON.stringify(updated));

      // 4. Navigate back
      router.push('/');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>Deck erstellen</Text>
        <TextInput placeholder='Name des Decks' style={styles.input} value={title} onChangeText={(text) => setTitle(text)}></TextInput>
        <TouchableOpacity style={styles.button} onPress={saveDeck}>
            <Text style={styles.buttonText}>Erstellen</Text>
        </TouchableOpacity>
        </View>
  );
}
