import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Updating = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Updating Lifecycle</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
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
  counter: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default Updating;
