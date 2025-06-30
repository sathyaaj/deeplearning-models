import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EuroKids Chennai Maths Helper</Text>
      <Text style={styles.instructions}>Tap the button to count:</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button
        title="Add 1"
        onPress={() => setCount(count + 1)}
        accessibilityLabel="Add one to the counter"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
  },
  counter: {
    fontSize: 32,
    marginBottom: 20,
  },
});
