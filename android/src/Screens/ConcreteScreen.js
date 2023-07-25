import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ConcreteScreen = () => {
  const handleRMCPress = () => {
    // Handle RMC box press
    console.log('Pressed RMC box');
  };

  const handleAggregatePress = () => {
    // Handle Normal Aggregate box press
    console.log('Pressed Normal Aggregate box');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.concreteBox} onPress={handleRMCPress}>
        <Image source={require('../Screens/concrete.jpg')} style={styles.concreteImage} />
        <Text style={styles.concreteText}>RMC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.concreteBox} onPress={handleAggregatePress}>
        <Image source={require('../Screens/concrete.jpg')} style={styles.concreteImage} />
        <Text style={styles.concreteText}>Normal Aggregate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD', // Light pinkish background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  concreteBox: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  concreteImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  concreteText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ConcreteScreen;
