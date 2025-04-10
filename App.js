import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to My First App!</Text>
      <Text style={styles.text}>You're building this in React Native 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // take full screen
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
});