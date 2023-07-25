import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BlockScreen = () => {
  const handleBlockPress = (blockType) => {
    // Handle block box press based on the blockType
    console.log(`Pressed ${blockType} box`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.blockBox}
        onPress={() => handleBlockPress('Concrete Block')}
      >
        <Image source={require('../Screens/block.jpg')} style={styles.blockImage} />
        <Text style={styles.blockText}>Concrete Block</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.blockBox}
        onPress={() => handleBlockPress('AAC Block')}
      >
        <Image source={require('../Screens/block.jpg')} style={styles.blockImage} />
        <Text style={styles.blockText}>AAC Block</Text>
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
  blockBox: {
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
  blockImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  blockText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default BlockScreen;
