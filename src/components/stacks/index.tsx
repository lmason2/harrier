import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../profile';
import TrainingHome from '../training';
import TrainingDetail from '../training/trainingDetail';

const ProfileStack = createNativeStackNavigator();

export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="ProfileHome" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export type TrainingStackProps = {
  TrainingHome: undefined;
  TrainingDetail: {day: string; mileage: number};
};
const TrainingStack = createNativeStackNavigator<TrainingStackProps>();

export const TrainingStackScreen = () => {
  return (
    <TrainingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="TrainingHome" component={TrainingHome} />
      <ProfileStack.Screen name="TrainingDetail" component={TrainingDetail} />
    </TrainingStack.Navigator>
  );
};
