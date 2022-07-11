import React from 'react';
import {useState} from 'react';
import {FC} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import sharedStyles from '../../shared/sharedStyles.styled';
import {JSONTrainingData} from '../../types/types';
import trainingStyles from './training.styled';
import TrainingData from './trainingData';

interface TrainingItemProps {
  data: {key: string; weeklyData: Array<JSONTrainingData>};
}

const TrainingItem: FC<TrainingItemProps> = ({data}) => {
  const [itemCollapsed, setItemCollapsed] = useState(true);
  return (
    <View style={trainingStyles.ItemContainer}>
      <View style={trainingStyles.DataHeaderContainer}>
        <Text style={trainingStyles.DataHeaderText}>{data.key}</Text>
        <TouchableOpacity
          onPress={() => {
            setItemCollapsed(e => !e);
          }}>
          <Text style={trainingStyles.DataHeaderText}>
            {itemCollapsed ? 'Expand' : 'Collapse'}
          </Text>
        </TouchableOpacity>
      </View>
      {!itemCollapsed && (
        <>
          <View style={sharedStyles.HorizontalRule} />
          <TrainingData data={data.weeklyData} />
        </>
      )}
    </View>
  );
};

export default TrainingItem;
