import { StyleSheet } from 'react-native';

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
        marginLeft: 30,
        marginRight: 60,
        marginBottom: 20,
        borderRadius: 16,
        padding: 30,
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
});

export default styles;