import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

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

      <Text style={styles.title}>Meine Decks</Text>

      <FlatList
        data={decks}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/deck/${item.id}`)}
            onLongPress={() => Alert.alert(
                item.title,
                'Was möchtest du tun?',
                [
                    { text: 'Bearbeiten', onPress: () => {} },
                    { text: 'Löschen', onPress: () => {} },
                    { text: 'Abbrechen', style: 'cancel' },
                ]
            )}
          >

            <LinearGradient
                colors={['#4C0075', '#6A00A3', '#8800D1', '#A600FF', '#B62EFF', '#C65CFF', '#D68AFF']}
                style={styles.deckCard}
              >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.deckCount}>0 Karten</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.fab} onPress={() => router.push('/create')}>
        <Ionicons name="add" size={28} color="#6A00A3" />
      </TouchableOpacity>
    </View>
  );
}
