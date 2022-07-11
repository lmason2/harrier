import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {JSONTrainingData} from '../../types/types';
import trainingStyles from './training.styled';
import {useNavigation} from '@react-navigation/native';
import {TrainingStackProps} from '../stacks';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface TrainingDataProps {
  data: Array<JSONTrainingData>;
}

const TrainingData: FC<TrainingDataProps> = ({data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TrainingStackProps>>();
  if (data.length === 0) {
    return <Text>No data</Text>;
  }

  const sumMileage = () => {
    let sum = 0;
    data.map(day => {
      sum += day.mileage;
    });
    return sum;
  };

  return (
    <View style={trainingStyles.DataContainer}>
      <Text
        style={trainingStyles.MileageText}>{`Mileage: ${sumMileage()}`}</Text>
      {data.map(day => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TrainingDetail', {
                day: day.day,
                mileage: day.mileage,
              });
            }}>
            <View style={trainingStyles.DataItemContainer}>
              <Text key={day.day} style={trainingStyles.DataText}>
                {day.day}
              </Text>
              <Text key={day.mileage} style={trainingStyles.DataText}>
                {day.mileage}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TrainingData;
