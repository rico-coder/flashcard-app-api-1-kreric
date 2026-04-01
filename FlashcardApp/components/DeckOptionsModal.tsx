import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../app/styles';

const COLORS = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C'];

type Props = {
  visible: boolean;
  deck: any;
  onClose: () => void;
  onSave: (updatedDeck: any) => void;
  onDelete: (deckId: string) => void;
};

export default function DeckOptionsModal({ visible, deck, onClose, onSave, onDelete }: Props) {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (deck) {
      setTitle(deck.title);
      setColor(deck.color);
    }
  }, [deck]);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Fehler', 'Titel darf nicht leer sein');
      return;
    }
    onSave({ ...deck, title: title.trim(), color });
    onClose();
  };

  const handleDelete = () => {
    Alert.alert('Deck löschen', 'Bist du sicher?', [
      { text: 'Abbrechen', style: 'cancel' },
      { text: 'Löschen', style: 'destructive', onPress: () => {
        onDelete(deck.id);
        onClose();
      }},
    ]);
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modalBox}>

          <Text style={styles.modalTitle}>Deck bearbeiten</Text>

          <TextInput
            placeholder="Titel"
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />

          <Text style={styles.subtitle}>Farbe wählen</Text>
          <View style={styles.colorRow}>
            {COLORS.map((c) => (
              <TouchableOpacity
                key={c}
                style={[
                  styles.colorCircle,
                  { backgroundColor: c },
                  color === c && { borderColor: '#000' },
                ]}
                onPress={() => setColor(c)}
              />
            ))}
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Speichern</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.buttonText}>Deck löschen</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={{ textAlign: 'center', marginTop: 12, color: '#999' }}>Abbrechen</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}