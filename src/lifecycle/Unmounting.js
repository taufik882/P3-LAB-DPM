import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Unmounting = () => {
  useEffect(() => {
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unmounting Lifecycle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Unmounting;
