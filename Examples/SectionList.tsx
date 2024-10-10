import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
} from 'react-native';

// Define the type for your user and section data
interface User {
  id: string;
  name: string;
  imageUrl: string;
}

interface SectionData {
  title: string;
  data: User[];
}

function App(): React.JSX.Element {
  // Data grouped by first letter of the name (sections)
  const [sections, setSections] = useState<SectionData[]>([
    {
      title: 'A',
      data: [
        { id: '1', name: 'Alice Johnson', imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
      ],
    },
    {
      title: 'D',
      data: [
        { id: '2', name: 'David Wilson', imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg' },
        { id: '3', name: 'Diana Morris', imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg' },
      ],
    },
    {
      title: 'J',
      data: [
        { id: '4', name: 'John Doe', imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg' },
        { id: '5', name: 'Jane Smith', imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg' },
        { id: '6', name: 'James Lee', imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg' },
      ],
    },
    {
      title: 'L',
      data: [
        { id: '7', name: 'Laura White', imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg' },
        { id: '8', name: 'Lisa Green', imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg' },
      ],
    },
    {
      title: 'M',
      data: [
        { id: '9', name: 'Michael Johnson', imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg' },
      ],
    },
    {
      title: 'S',
      data: [
        { id: '10', name: 'Sarah Brown', imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg' },
      ],
    },
  ]);

  // Render each item (user)
  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  // Render each section header (A, D, J, etc.)
  const renderSectionHeader = ({ section }: { section: SectionData }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{section.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sections} // Array of sections with users
        renderItem={renderItem} // Function to render each item
        renderSectionHeader={renderSectionHeader} // Function to render each section header
        keyExtractor={(item) => item.id} // Key extractor for each user
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    padding: 10,
    backgroundColor: '#ddd',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
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
