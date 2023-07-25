import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Agartala', value: '1'},
  {label: 'Agra', value: '2'},
  {label: 'Ahmedabad', value: '3'},
  {label: 'Aizawl', value: '4'},
  {label: 'Ajmer', value: '5'},
  {label: 'Allahabad', value: '6'},
  {label: 'Amritsar', value: '7'},
  {label: 'Banglore', value: '8'},
  {label: 'Bhopal', value: '9'},
  {label: 'Bhubneshwar', value: '10'},
  {label: 'Bikaner', value: '11'},
  {label: 'Chandigarh', value: '12'},
  {label: 'Chennai', value: '13'},
  {label: 'Dehradun', value: '14'},
  {label: 'Dispur', value: '15'},
  {label: 'Gandhinagar', value: '16'},
  {label: 'Gangtok', value: '17'},
  {label: 'Ghaziabad', value: '18'},
  {label: 'Gurgaon', value: '19'},
  {label: 'Guwahati', value: '20'},
  {label: 'Hyderabad', value: '21'},
  {label: 'Imphal', value: '22'},
  {label: 'Indore', value: '23'},
  {label: 'Itanagar', value: '24'},
  {label: 'Jaipur', value: '25'},
  {label: 'Jamnagar', value: '26'},
  {label: 'Jodhpur', value: '27'},
  {label: 'Kanpur', value: '28'},
  {label: 'Kochi', value: '29'},
  {label: 'Kohima', value: '30'},
  {label: 'Kolkata', value: '31'},
  {label: 'Kota', value: '32'},
  {label: 'Lucknow', value: '33'},
  {label: 'Ludhania', value: '34'},
  {label: 'Meerut', value: '35'},
  {label: 'Mumbai', value: '36'},
  {label: 'Nagpur', value: '37'},
  {label: 'Nashik', value: '38'},
  {label: 'Naya Raipur', value: '39'},
  {label: 'New Delhi', value: '40'},
  {label: 'Pali', value: '41'},
  {label: 'Patna', value: '42'},
  {label: 'Pune', value: '43'},
  {label: 'Rajkot', value: '44'},
  {label: 'Ranchi', value: '45'},
  {label: 'Shillong', value: '46'},
  {label: 'Shimla', value: '47'},
  {label: 'Srinagar', value: '48'},
  {label: 'Surat', value: '49'},
  {label: 'Thiruvanathapuram', value: '50'},
  {label: 'Udaipur', value: '51'},
  {label: 'Vadodara', value: '52'},
];

const BASE_URL = 'https://civildeal.com/civilmall/api/';

const RegisterScreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [mobileNoError, setMobileNoError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateFields = () => {
    let isValid = true;

    if (!nameError.trim()) {
      setNameError('Name cannot be empty');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Last name cannot be empty');
      isValid = false;
    } else {
      setLastNameError('');
    }

    if (!mobileNo.trim()) {
      setMobileNoError('Mobile number cannot be empty');
      isValid = false;
    } else {
      setMobileNoError('');
    }

    if (!password.trim()) {
      setPasswordError('Password cannot be empty');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleRegister = () => {
    const isValid = validateFields();

    if (isValid) {
      const url = BASE_URL + 'register';

      const requestBody = {
        mobileNo: mobileNo,
        password: password,
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            navigation.navigate('App.js');
            console.log('Registration successful:', data.message);
          } else {
            Alert.alert('Error', data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          Alert.alert('Error', 'Something went wrong. Please try again later.');
        });
    }

    return (
      <View style={styles.container}>
        <Image source={require('../Screens/logoo.jpg')} style={styles.logo} />
        <Text style={styles.registerText}>Register Now</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor={'#888'}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor={'#888'}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile No"
            placeholderTextColor={'#888'}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'#888'}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'#888'}
            secureTextEntry={true}
          />
          <View style={styles.dropDownContainer}>
            <Dropdown
              style={styles.dropDownBox}
              placeholderStyle={styles.dropDownPlaceholder}
              selectedTextStyle={styles.dropDownSelectedText}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select Category"
              value={value}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
              // renderItem={item => (
              //   <Text
              //     style={{
              //       color: 'black',
              //       paddingVertical: 5,
              //       paddingHorizontal: 10,
              //       fontSize: 20,
              //     }}>
              //     {item.label}
              //   </Text>
              // )}
            />
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: -300,
  },
  registerText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    color: 'black',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  registerButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 10,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  dropdown: {
    color: 'black',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  icon: {
    marginRight: 5,
  },
  label: {
    color: 'black',
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    color: 'black',
    fontSize: 16,
  },
  selectedTextStyle: {
    color: 'black',
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    color: 'black',
    height: 40,
    fontSize: 16,
  },
  dropdownItem: {
    color: 'black', // Set the color of dropdown list items to black
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  dropDownContainer: {
    height: 50,
    width: '100%',
    borderColor: '#c1c1c1',
    borderWidth: 0.5,
    borderRadius: 10,
    // paddingLeft: wp(2),
    backgroundColor: '#fff',
    // elevation: 5,
  },
  dropDownBox: {
    flex: 1,
  },
  dropDownPlaceholder: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#999',
  },
  dropDownSelectedText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },
});

export default RegisterScreen;
