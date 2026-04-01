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
        marginTop: 20,
        marginBottom: 30,
    },
    card: {
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        color: '#fff',
    },
    input: {
        backgroundColor: '#F5F7FA',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1A1A1A',
        marginBottom: 12,

        borderWidth: 1,
        borderColor: '#E0E6ED',

        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

        elevation: 2,
      },
    deckCard: {
        flex: 1,
        paddingHorizontal: 50,
        marginHorizontal: 10,
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
    cancelButton: {
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        marginBottom: 5,
    },
    cancelButtonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
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
        backgroundColor: '#6A00A3',
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

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

        elevation: 6,

    },
    fabAdd: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        marginBottom: 80,
        backgroundColor: '#fff',
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

        elevation: 6,
    },
    overlay: {
        flex: 1,
        backgroundColor: '#00000066',
        justifyContent: 'center',
        padding: 24,
    },
    modalBox: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#222',
    },
    colorRow: {
        flexDirection: 'row',
        gap: 12,
        marginVertical: 16,
    },
    colorCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    cardItem: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    cardQuestion: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#222',
      marginBottom: 8,
    },
    cardAnswer: {
      fontSize: 14,
      color: '#666',
      borderTopWidth: 1,
      borderTopColor: '#eee',
      paddingTop: 8,
    },
});

export default styles;