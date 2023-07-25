import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BrickScreen = () => {
  const handleBrickPress = (brickType) => {
    // Handle brick box press based on the brickType
    console.log(`Pressed ${brickType} box`);
  };

  return (
    <View style={styles.container}>
            <View style={styles.brickContainer}>

      <TouchableOpacity
        style={styles.brickBox}
        onPress={() => handleBrickPress('Red Brick')}
      >
        <Image source={require('../Screens/brick.jpg')} style={styles.brickImage} />
        <Text style={styles.brickText}>Red Brick</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.brickBox}
        onPress={() => handleBrickPress('Flyash Brick')}
      >
        <Image source={require('../Screens/product3.jpg')} style={styles.brickImage} />
        <Text style={styles.brickText}>Flyash Brick</Text>
      </TouchableOpacity>
          </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FFCCCC', // Light red background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  brickBox: {
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
  brickImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  brickText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default BrickScreen;
