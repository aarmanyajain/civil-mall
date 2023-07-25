import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';

const RequirementScreen = () => {
  const [requirement, setRequirement] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tell us what you Need</Text>
      <View style={styles.line} />

      <View style={styles.form}>
        <Text style={styles.label}>Requirement</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter requirement"
          placeholderTextColor='#888'
          value={requirement}
          onChangeText={setRequirement}
        />

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor='#888'
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Mobile</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile No"
          placeholderTextColor='#888'
          value={mobile}
          onChangeText={setMobile}
        />

        
        <Button title="Submit" onPress={handleSubmit} color="blue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  form: {
    
    marginBottom: 20,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default RequirementScreen;
