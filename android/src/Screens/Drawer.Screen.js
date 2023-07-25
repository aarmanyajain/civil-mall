import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DrawerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image source={require('../Screens/Profile.jpg')} style={styles.logoImage} /> */}
        <Text style={styles.greetingText}>Hello Guest</Text>
      </View>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Civil Mall</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Interior and Exterior</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Drawing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Labour Adda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Join Labour Adda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Skilled Labour</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Post Requirement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Project Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Video</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Become Vendor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerOption}>
        <Text style={styles.drawerOptionText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  drawerOption: {
    marginTop: 10,
  },
  drawerOptionText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default DrawerScreen;
