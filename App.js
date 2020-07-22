import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './search';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', marginBottom: 10 }}>Pokedex native soon!</Text>
      <StatusBar style="auto" />
      <Search></Search>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343a40',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
});
