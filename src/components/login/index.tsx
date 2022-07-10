import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './login.styled';

interface LoginProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const handleLogin = (setIsLoggedIn: Dispatch<SetStateAction<boolean>>) => {
  // handle login
  setIsLoggedIn(true);
};

const Login: FC<LoginProps> = ({setIsLoggedIn}) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  return (
    <View style={styles.LoginContainer}>
      <Text style={styles.MainText}>Harrier</Text>
      <View style={styles.Card}>
        {isSigningUp && (
          <>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="#000"
            />
          </>
        )}
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#000"
        />
        {isSigningUp && (
          <>
            <TextInput
              style={styles.TextInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
          </>
        )}
        {!isSigningUp && (
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              handleLogin(setIsLoggedIn);
            }}>
            <Text style={styles.Text}>Login</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            setIsSigningUp(s => !s);
          }}>
          <Text style={styles.Text}>
            {isSigningUp ? `Create Account` : `Sign Up`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
