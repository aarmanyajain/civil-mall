import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CementScreen = () => {
  const handleCementPress = (cementType) => {
    // Handle cement box press based on the cementType
    console.log(`Pressed ${cementType} box`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cementBox}
        onPress={() => handleCementPress('OPC Cement')}
      >
        <Image source={require('../Screens/cement.jpg')} style={styles.cementImage} />
        <Text style={styles.cementText}>OPC Cement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cementBox}
        onPress={() => handleCementPress('PPC Cement')}
      >
        <Image source={require('../Screens/cement.jpg')} style={styles.cementImage} />
        <Text style={styles.cementText}>PPC Cement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cementBox}
        onPress={() => handleCementPress('White Cement')}
      >
        <Image source={require('../Screens/whitecement.jpg')} style={styles.cementImage} />
        <Text style={styles.cementText}>White Cement</Text>
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
  cementBox: {
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
  cementImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cementText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default CementScreen;
