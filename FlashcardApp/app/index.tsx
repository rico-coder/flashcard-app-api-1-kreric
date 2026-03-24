import React from 'react';
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

const styles = {
  title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#222',
      marginBottom: 20,
      marginTop: 20,
  },
  cardTitle: {
      fontSize: 16,
      color: '#000',
  },
  button: {
      fontSize: 16,
      color: '#222',
      backgroundColor: '#4A90E2',
      borderRadius: 12,
      padding: 20,
      marginBottom: 16,
  }
};

export default function HomeScreen(){
    return(
         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={ styles.title }>Willkommen zur Flashcard-App</Text>
              <Button style={ styles.title } title="Deck erstellen" onPress={() => router.push('/create')}/>
              <Button style={ styles.title } title="Deck Detail" onPress={() => router.push('/deck/123')} />

              <Text style={styles.title} >Decks</Text>
                  <View style={{
                    backgroundColor: '#4A90E2',
                    borderRadius: 12,
                    padding: 20,
                    marginBottom: 16,
                  }}>
                    <Text style={styles.cardTitle}>Mathe</Text>
                  </View>

                  <View style={{
                    backgroundColor: '#4A90E2',
                    borderRadius: 12,
                    padding: 20,
                    marginBottom: 16,
                  }}>
                    <Text style={styles.cardTitle}>Deutsch</Text>
                  </View>

                  <View style={{
                    backgroundColor: '#4A90E2',
                    borderRadius: 12,
                    padding: 20,
                    marginBottom: 16,
                  }}>
                    <Text style={styles.cardTitle}>Chemie</Text>
                  </View>
            </View>
        );
    }