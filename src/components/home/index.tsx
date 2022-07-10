import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {blueGreyColor} from '../../shared/colorScheme.styled';
import {fonts} from '../../shared/fonts';
import Chart from '../chart';
import Map from '../map';
import Profile from '../profile';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

interface HomeProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
enum PageType {
  Map,
  Chart,
  Profile,
}

const Tab = createBottomTabNavigator();
const Home: FC<HomeProps> = ({setIsLoggedIn}) => {
  const [pageType, setPageType] = useState(PageType.Map);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Chart" component={Chart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Home;

{
  /* <TouchableOpacity onPress={() => setIsLoggedIn(false)}>
        <Text>Logout</Text>
      </TouchableOpacity> */
}
