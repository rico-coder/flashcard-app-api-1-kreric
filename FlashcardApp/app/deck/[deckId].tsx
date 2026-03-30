import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity,
  ActivityIndicator, FlatList,
  Modal, TextInput, Alert
} from 'react-native';
import { useLocalSearchParams, router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

export default function DeckDetailScreen() {
  const { deckId } = useLocalSearchParams();
  const [deck, setDeck] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useFocusEffect(
    useCallback(() => {
      const loadDeck = async () => {
        setLoading(true);
        const data = await AsyncStorage.getItem('decks');

        if (data) {
          const decks = JSON.parse(data);
          const found = decks.find((d) => d.id === deckId);

          setDeck(found);
          setCards(found?.cards || []);
        }

        setLoading(false);
      };

      loadDeck();
    }, [deckId])
  );

  const saveCard = async () => {
    if (!question.trim() || !answer.trim()) {
      Alert.alert('Fehler', 'Bitte Frage und Antwort eingeben!');
      return;
    }

    const data = await AsyncStorage.getItem('decks');
    const decks = JSON.parse(data);

    const index = decks.findIndex((d) => d.id === deckId);

    const newCard = {
      id: Date.now().toString(),
      question: question.trim(),
      answer: answer.trim(),
    };

    decks[index].cards.push(newCard);

    await AsyncStorage.setItem('decks', JSON.stringify(decks));

    setCards(decks[index].cards);
    setDeck(decks[index]);

    setQuestion('');
    setAnswer('');
    setModalVisible(false);
  };

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
        keyExtractor={(item, index) => item.id ?? index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItem}>
            <Text style={styles.cardQuestion}>{item.question}</Text>
            <Text style={styles.cardAnswer}>{item.answer}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/')}>
        <Text style={styles.backButtonText}>Zurück</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.fabAdd} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={28} color="#6A00A3" />
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
          <View style={{
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 24,
          }}>
            <Text style={styles.detailTitle}>Neue Karte</Text>

            <TextInput
              style={styles.input}
              placeholder="Frage"
              value={question}
              onChangeText={setQuestion}
            />

            <TextInput
              style={styles.input}
              placeholder="Antwort"
              value={answer}
              onChangeText={setAnswer}
            />

            <TouchableOpacity style={styles.button} onPress={saveCard}>
              <Text style={styles.backButtonText}>Speichern</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Abbrechen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}