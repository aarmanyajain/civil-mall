import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const StoneScreen = () => {
  const handleStonePress = () => {
    console.log('Pressed Stone box');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.stoneBox} onPress={handleStonePress}>
        <Image source={require('../Screens/stone.jpg')} style={styles.stoneImage} />
        <Text style={styles.stoneText}>Stone</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  stoneBox: {
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
  stoneImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  stoneText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default StoneScreen;
