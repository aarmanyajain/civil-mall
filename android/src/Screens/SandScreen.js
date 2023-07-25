import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SandScreen = () => {
  const handleSandPress = (sandType) => {
    // Handle sand box press based on the sandType
    console.log(`Pressed ${sandType} box`);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity
          style={styles.sandBox}
          onPress={() => handleSandPress('River Sand')}
        >
          <Image source={require('../Screens/sand.jpg')} style={styles.sandImage} />
          <Text style={styles.sandText}>River sand</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sandBox}
          onPress={() => handleSandPress('M-Sand')}
        >
          <Image source={require('../Screens/sand.jpg')} style={styles.sandImage} />
          <Text style={styles.sandText}>M-Sand</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sandBox}
          onPress={() => handleSandPress('Dust Sand')}
        >
          <Image source={require('../Screens/sand.jpg')} style={styles.sandImage} />
          <Text style={styles.sandText}>Dust Sand</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCCCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  sandBox: {
    width: 150,
    height: 150,
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
  sandImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  sandText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SandScreen;
