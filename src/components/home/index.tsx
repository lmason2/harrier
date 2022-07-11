import React, {Dispatch, FC, SetStateAction} from 'react';
import {blueGreyColor} from '../../shared/colorScheme.styled';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileStackScreen, TrainingStackScreen} from '../stacks';

interface HomeProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Drawer = createDrawerNavigator();
const Home: FC<HomeProps> = ({setIsLoggedIn}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={() => ({
          headerStyle: {
            backgroundColor: blueGreyColor.light,
          },
          drawerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: blueGreyColor.secondary,
          drawerActiveBackgroundColor: blueGreyColor.secondary,
          drawerActiveTintColor: blueGreyColor.light,
          drawerInactiveTintColor: '#000',
        })}>
        <Drawer.Screen name="Training" component={TrainingStackScreen} />
        {/* <Drawer.Screen name="Map" component={Map} />
        <Drawer.Screen name="Chart" component={Chart} /> */}
        <Drawer.Screen name="Profile" component={ProfileStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Home;
