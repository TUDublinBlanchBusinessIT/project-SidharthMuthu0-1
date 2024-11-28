import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  // General container for the screen
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    padding: 20,
  },

  // Text styles
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // Styling for the list of kits
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },

  // Card styling for each club kit item
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  // Image styling for the kit
  cardImage: {
    width: 150,  // You can adjust this size
    height: 150, // Ensure the image has proper size
    borderRadius: 10,
    marginBottom: 15,
  },

  // Title and price styling
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },

  // Button styling
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
  padding: 20,
  borderTopWidth: 1,
  borderTopColor: '#ccc',
  width: '100%',
  alignItems: 'center',
},
summaryText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
});

export default CommonStyles;
