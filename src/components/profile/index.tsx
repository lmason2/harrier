import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import sharedStyles from '../../shared/sharedStyles.styled';
import profileStyles from './profile.styled';
const Profile = () => {
  const [secure, setSecure] = useState(true);
  return (
    <View style={profileStyles.ProfileContainer}>
      <Text style={profileStyles.Text}>Luke Mason</Text>
      <View style={sharedStyles.HorizontalRule} />
      <Text
        style={
          profileStyles.TextInput
        }>{`Email: ${'lukesamuelmason@gmail.com'}`}</Text>

      <View style={profileStyles.RowContainer}>
        <View style={profileStyles.GroupedContainer}>
          <Text>Password: </Text>
          <TextInput
            style={profileStyles.TextInput}
            value={'ForksUp11'}
            secureTextEntry={secure}
            editable={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setSecure(s => !s);
          }}>
          <Text>{secure ? 'Reveal' : 'Hide'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={profileStyles.GarminButton}>
        <Text style={profileStyles.GarminText}>Connect to Garmin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
