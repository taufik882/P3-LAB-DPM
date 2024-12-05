import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mounting = () => {
  useEffect(() => {
    console.log('Component Mounted');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mounting Lifecycle</Text>
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

export default Mounting;
