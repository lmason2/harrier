import React from 'react';
import {FlatList, View} from 'react-native';
import trainingStyles from './training.styled';
import TrainingItem from './trainingItem';

const data = [
  {
    key: '7/10/22',
    weeklyData: [
      {day: 'Sunday', mileage: 16},
      {day: 'Monday', mileage: 10},
      {day: 'Tuesday', mileage: 12},
      {day: 'Wednesday', mileage: 8},
      {day: 'Thursday', mileage: 12},
      {day: 'Friday', mileage: 8},
      {day: 'Saturday', mileage: 6},
    ],
  },
  {
    key: '7/4/22',
    weeklyData: [
      {day: 'Sunday', mileage: 14},
      {day: 'Monday', mileage: 8},
      {day: 'Tuesday', mileage: 12},
      {day: 'Wednesday', mileage: 13},
      {day: 'Thursday', mileage: 12},
      {day: 'Friday', mileage: 6},
      {day: 'Saturday', mileage: 5},
    ],
  },
  {
    key: '6/27/22',
    weeklyData: [
      {day: 'Sunday', mileage: 4},
      {day: 'Monday', mileage: 7},
      {day: 'Tuesday', mileage: 10},
      {day: 'Wednesday', mileage: 12},
      {day: 'Thursday', mileage: 9},
      {day: 'Friday', mileage: 7},
      {day: 'Saturday', mileage: 14},
    ],
  },
];

const TrainingHome = () => {
  return (
    <View style={trainingStyles.TrainingContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <TrainingItem data={item} />}
      />
    </View>
  );
};

export default TrainingHome;
