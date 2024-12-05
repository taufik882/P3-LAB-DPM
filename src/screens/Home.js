import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const resetCount = () => setCount(0);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <Text style={styles.title}>Hitung Dzikir Anda</Text>
        <Text style={styles.counter}>{count}</Text>
        <TouchableOpacity style={styles.buttonPrimary} onPress={incrementCount}>
          <Icon name="add-circle-outline" size={30} color="#FFF" />
          <Text style={styles.buttonText}>Tambah</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={resetCount}>
          <Icon name="refresh" size={30} color="#4CAF50" />
          <Text style={styles.buttonTextSecondary}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Warna latar lembut
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 20,
  },
  counter: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 30,
  },
  buttonPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    justifyContent: 'center',
  },
  buttonSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonTextSecondary: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Home;
