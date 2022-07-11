import {StyleSheet} from 'react-native';
import {blueGreyColor} from '../../shared/colorScheme.styled';
import {fonts} from '../../shared/fonts';

const trainingStyles = StyleSheet.create({
  ItemContainer: {
    backgroundColor: blueGreyColor.background,
    borderColor: blueGreyColor.light,
    borderWidth: 2,
    marginVertical: 3,
    borderRadius: 5,
  },
  TrainingContainer: {
    height: '100%',
    backgroundColor: blueGreyColor.background,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  DataHeaderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  DataHeaderText: {
    fontFamily: fonts.bold,
    color: blueGreyColor.secondary,
  },
  DataContainer: {
    padding: 10,
  },
  DataItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: blueGreyColor.light,
    borderRadius: 10,
    padding: 10,
    marginVertical: 3,
  },
  DataText: {
    fontFamily: fonts.regular,
    fontSize: 16,
    color: blueGreyColor.background,
  },
  MileageText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: '#000',
  },
  TrainingDetailContainer: {
    backgroundColor: blueGreyColor.background,
    height: '100%',
    padding: 20,
    alignItems: 'center',
  },
  BackButton: {
    alignSelf: 'flex-start',
    borderColor: blueGreyColor.light,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  BackText: {
    fontFamily: fonts.bold,
    fontSize: 16,
    color: blueGreyColor.secondary,
  },
  TrainingCard: {
    backgroundColor: '#000',
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  SubTrainingCard: {
    backgroundColor: blueGreyColor.light,
    width: '50%',
    alignSelf: 'flex-end',
    marginTop: 5,
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  TrainingCardExpand: {
    backgroundColor: blueGreyColor.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
  },
  CardText: {
    fontFamily: fonts.regular,
  },
  HeaderCardText: {
    fontFamily: fonts.bold,
    color: blueGreyColor.secondary,
  },
  NotesCard: {
    backgroundColor: blueGreyColor.light,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.5,
    borderRadius: 10,
    marginTop: 10,
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
});

export default trainingStyles;
