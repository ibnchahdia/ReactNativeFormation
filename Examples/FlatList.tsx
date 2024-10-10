import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';

// Define the type for your user data
interface User {
  id: string;
  name: string;
  imageUrl: string;
}

function App(): React.JSX.Element {
  const [data, setData] = useState<User[]>([
    { id: '1', name: 'John Doe', imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: '2', name: 'Jane Smith', imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: '3', name: 'Michael Johnson', imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: '4', name: 'Emily Davis', imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { id: '5', name: 'David Wilson', imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: '6', name: 'Sarah Brown', imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { id: '7', name: 'James Lee', imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { id: '8', name: 'Laura White', imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { id: '9', name: 'Chris Black', imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { id: '10', name: 'Lisa Green', imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
  ]);

  // Add type to the item parameter
  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data} // Array of data to display
        renderItem={renderItem} // Function to render each item
        keyExtractor={item => item.id} // Key extractor for each item
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  item: {
    flexDirection: 'row', // Align image and text in a row
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center', // Vertically align items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the image circular
    marginRight: 20, // Space between image and text
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
