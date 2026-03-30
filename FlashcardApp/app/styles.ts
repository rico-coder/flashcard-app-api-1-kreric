import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
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
    input: {
        backgroundColor: '#E0E0E0',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        fontSize: 16,
        color: '#000',
        width: 200,
        marginBottom: 10,
        marginTop: 10,
        padding: 5,
    },
    deckCard: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 30,
    borderRadius: 16,
    },
    deckTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    deckCount: {
        fontSize: 12,
        color: '#ffffffaa',
        marginTop: 8,
    },
    createButton: {
      backgroundColor: '#6A00A3',
      borderRadius: 12,
      padding: 14,
      alignItems: 'center',
      marginBottom: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#6A00A3',
      borderRadius: 12,
      padding: 14,
      alignItems: 'center',
      marginBottom: 5,
    },
    detailContainer: {
      flex: 1,
      padding: 24,
    },
    detailTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#222',
      marginBottom: 16,
    },
    backButton: {
      backgroundColor: '#4A90E2',
      borderRadius: 12,
      padding: 14,
      alignItems: 'center',
      marginTop: 20,
    },
    backButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardItem: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
    },
    cardQuestion: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#222',
    },
    cardAnswer: {
      fontSize: 14,
      color: '#666',
      marginTop: 6,
    },
    fab: {
      position: 'absolute',
      bottom: 24,
      right: 24,
      backgroundColor: '#fff',
      width: 56,
      height: 56,
      borderRadius: 28,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 6,
    },
});

export default styles;