import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useState} from 'react';
import {FC} from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import sharedStyles from '../../shared/sharedStyles.styled';
import {TrainingStackProps} from '../stacks';
import trainingStyles from './training.styled';

type Props = NativeStackScreenProps<TrainingStackProps, 'TrainingDetail'>;

const TrainingDetail: FC<Props> = ({route}) => {
  const {day, mileage} = route.params;
  const navigation = useNavigation();
  const [mileageExpanded, setMileageExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <View style={trainingStyles.TrainingDetailContainer}>
      <TouchableOpacity
        style={trainingStyles.BackButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={trainingStyles.BackText}>Back</Text>
      </TouchableOpacity>
      <View style={trainingStyles.TrainingCard}>
        <Text style={trainingStyles.HeaderCardText}>{day}</Text>
      </View>
      <View style={trainingStyles.TrainingCardExpand}>
        <Text style={trainingStyles.CardText}>{`${mileage} miles`}</Text>
        <TouchableOpacity
          onPress={() => {
            setMileageExpanded(m => !m);
          }}>
          <Text>{mileageExpanded ? 'Collapse' : 'Expand'}</Text>
        </TouchableOpacity>
      </View>
      {mileageExpanded && (
        <>
          <TouchableOpacity
            style={trainingStyles.SubTrainingCard}
            onPress={() => {
              setOpenModal(true);
            }}>
            <Text style={trainingStyles.CardText}>@7:00 - 10</Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={openModal}
              statusBarTranslucent={true}>
              <View style={sharedStyles.ModalBackground}>
                <View style={trainingStyles.NotesCard}>
                  <TouchableOpacity
                    onPress={() => {
                      setOpenModal(false);
                    }}>
                    <Text>Close</Text>
                  </TouchableOpacity>
                  <Text style={trainingStyles.CardText}>Testing</Text>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
          <TouchableOpacity style={trainingStyles.SubTrainingCard}>
            <Text style={trainingStyles.CardText}>@4:00 - 6</Text>
          </TouchableOpacity>
        </>
      )}
      <View style={trainingStyles.NotesCard}>
        <Text style={trainingStyles.HeaderCardText}>Notes</Text>
        <View style={sharedStyles.HorizontalRuleDark} />
        <Text style={trainingStyles.CardText}>Testing a notes secion</Text>
      </View>
    </View>
  );
};

export default TrainingDetail;
