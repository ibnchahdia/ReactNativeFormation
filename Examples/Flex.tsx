import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Flexbox Layout Example</Text>

      {/* Row layout (horizontal) */}
      <View style={styles.rowContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>1</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>2</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>3</Text>
        </View>
      </View>

      {/* Column layout (vertical) */}
      <View style={styles.columnContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>A</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>B</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>C</Text>
        </View>
      </View>

      {/* Space between layout */}
      <View style={styles.spaceBetweenContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>X</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Y</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.boxText}>Z</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-around', // Distribute space around the boxes
    alignItems: 'center', // Align items in the center vertically
    marginBottom: 30,
  },
  columnContainer: {
    flexDirection: 'column', // Vertical layout
    justifyContent: 'space-between', // Distribute space between the boxes
    alignItems: 'center', // Center horizontally
    marginBottom: 30,
  },
  spaceBetweenContainer: {
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Distribute space between the boxes
    alignItems: 'center', // Align items in the center vertically
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#4CAF50',
    justifyContent: 'center', // Center text inside the box (vertically)
    alignItems: 'center', // Center text inside the box (horizontally)
    borderRadius: 10,
  },
  boxText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
