import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

const BASE_URL = 'https://civildeal.com/civilmall/api/';

const forgetPasswordAPI = async mobileNumber => {
  try {
    const endpoint = 'otpVerify';
    const url = BASE_URL + endpoint;

    const formdata = new FormData();
    formdata.append('mobile', '9511879088');
    formdata.append('otp', '8665');

    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow',
    // });

    // if (!response.ok) {a
    //   throw new Error('Failed to fetch data');
    // }

    // const data = await response.json();
    // return data;
  } catch (error) {
    console.error('Error in API call:', error);
    throw error;
  }
};

const OTPScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleForgetPassword = async () => {
    try {
      const response = await forgetPasswordAPI(mobileNumber);

      console.log('API response:', response);
    } catch (error) {
      console.error('Error in forgetPasswordAPI:', error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Image source={require('../Screens/logoo.jpg')} style={styles.logo} />
      </View>
      <Text style={styles.text1}>Forget your password?</Text>
      <Text style={styles.text2}>Confirm your mobile number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Mobile No"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        onChangeText={text => setMobileNumber(text)}
        value={mobileNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleForgetPassword}>
        <Text style={styles.buttonText}>Forget Password</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    marginTop: -110,
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  text1: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  text2: {
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    color: 'black',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default OTPScreen;
