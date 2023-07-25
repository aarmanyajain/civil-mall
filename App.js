import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './android/src/Screens/SplashScreen';
import HomeScreen from './android/src/Screens/HomeScreen';
import RegisterScreen from './android/src/Screens/RegisterScreen';
import OTPScreen from './android/src/Screens/OtpScreen';
import DrawerScreen from './android/src/Screens/Drawer.Screen';
import RequirementScreen from './android/src/Screens/RequirementScreen';
import CementScreen from './android/src/Screens/CementScreen';
import BrickScreen from './android/src/Screens/BrickScreen';
import SandScreen from './android/src/Screens/SandScreen';
import TmtBarScreen from './android/src/Screens/TmtBarScreen';
import BlockScreen from './android/src/Screens/BlockScreen';
import StoneScreen from './android/src/Screens/StoneScreen';
import ConcreteScreen from './android/src/Screens/ConcreteScreen';
import TPScreen1 from './android/src/Screens/TPScreen1';
import TPScreen2 from './android/src/Screens/TPScreen2';
import TPScreen3 from './android/src/Screens/TPScreen3';
import TPScreen4 from './android/src/Screens/TPScreen4';
import TPScreen5 from './android/src/Screens/TPScreen5';
import TPScreen6 from './android/src/Screens/TPScreen6';
import LPScreen1 from './android/src/Screens/LPScreen1';
import LPScreen2 from './android/src/Screens/LPScreen2';
import LPScreen3 from './android/src/Screens/LPScreen3';
import LPScreen4 from './android/src/Screens/LPScreen4';
import LPScreen5 from './android/src/Screens/LPScreen5';

const Stack = createStackNavigator();

const BASE_URL = 'https://civildeal.com/civilmall/api/';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');

  const handleMobile = (text, key) => {
    if (key === 'mobile') {
      setMobileNo(text);
    }
    if (key === 'pswrd') {
      setPassword(text);
    }
  };

  const handleLogin = async () => {
    const url = BASE_URL + 'user_login';

    const requestBody = {
      mobile: mobileNo,
      password: password,
      token: 885,
    };

    var formdata = new FormData();

    for (let key in requestBody) {
      formdata.append(key, requestBody[key]);
    }

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(url, requestOptions)
      .then(Response => Response.json())
      .then(data => console.log(data));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require('./android/src/Screens/logoo.jpg')}
          style={styles.logo}
        />
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>New User Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mobile No"
          placeholderTextColor="#888"
          onChangeText={text => handleMobile(text, 'mobile')}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          onChangeText={text => handleMobile(text, 'pswrd')}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.bottomOption}
          onPress={() => navigation.navigate('OtpScreen')}>
          <Text style={styles.bottomOptionText}>Send OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomOption}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.bottomOptionText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name=" " component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="OtpScreen" component={OTPScreen} />
        <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
        <Stack.Screen name="RequirementScreen" component={RequirementScreen} />
        <Stack.Screen name="CementScreen" component={CementScreen} />
        <Stack.Screen name="BrickScreen" component={BrickScreen} />
        <Stack.Screen name="SandScreen" component={SandScreen} />
        <Stack.Screen name="TmtBarScreen" component={TmtBarScreen} />
        <Stack.Screen name="BlockScreen" component={BlockScreen} />
        <Stack.Screen name="StoneScreen" component={StoneScreen} />
        <Stack.Screen name="ConcreteScreen" component={ConcreteScreen} />
        <Stack.Screen name="TPScreen1" component={TPScreen1} />
        <Stack.Screen name="TPScreen2" component={TPScreen2} />
        <Stack.Screen name="TPScreen3" component={TPScreen3} />
        <Stack.Screen name="TPScreen4" component={TPScreen4} />
        <Stack.Screen name="TPScreen5" component={TPScreen5} />
        <Stack.Screen name="TPScreen6" component={TPScreen6} />
        <Stack.Screen name="LPScreen1" component={LPScreen1} />
        <Stack.Screen name="LPScreen2" component={LPScreen2} />
        <Stack.Screen name="LPScreen3" component={LPScreen3} />
        <Stack.Screen name="LPScreen4" component={LPScreen4} />
        <Stack.Screen name="LPScreen5" component={LPScreen5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    marginTop: -80,
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  optionContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  optionButton: {
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    color: 'black',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: 'skyblue',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomOption: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
  bottomOptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
