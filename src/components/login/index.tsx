import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import loginStyles from './login.styled';
import sharedStyles from '../../shared/sharedStyles.styled';

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
    <View style={loginStyles.LoginContainer}>
      <Text style={loginStyles.MainText}>Harrier</Text>
      <View style={loginStyles.Card}>
        <Text style={loginStyles.SubText}>
          {isSigningUp ? 'New Account' : 'Login'}
        </Text>
        <View style={sharedStyles.HorizontalRule} />
        {isSigningUp && (
          <>
            <TextInput
              style={loginStyles.TextInput}
              placeholder="Full Name"
              placeholderTextColor="#000"
            />
          </>
        )}
        <TextInput
          style={loginStyles.TextInput}
          placeholder="Email"
          placeholderTextColor="#000"
        />
        <TextInput
          style={loginStyles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#000"
        />
        {isSigningUp && (
          <>
            <TextInput
              style={loginStyles.TextInput}
              placeholder="Confirm Password"
              secureTextEntry={true}
              placeholderTextColor="#000"
            />
          </>
        )}
        <TouchableOpacity
          style={loginStyles.Button}
          onPress={() => {
            handleLogin(setIsLoggedIn);
          }}>
          <Text style={loginStyles.Text}>
            {isSigningUp ? 'Create Account' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={loginStyles.BottomText}
        onPress={() => {
          setIsSigningUp(s => !s);
        }}>
        {isSigningUp
          ? `Already have an account? Login`
          : `Need an account? Create Account`}
      </Text>
    </View>
  );
};

export default Login;
