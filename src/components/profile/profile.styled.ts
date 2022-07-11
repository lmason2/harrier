import {StyleSheet} from 'react-native';
import {blueGreyColor} from '../../shared/colorScheme.styled';
import {fonts} from '../../shared/fonts';

const profilesStyles = StyleSheet.create({
  ProfileContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: blueGreyColor.background,
    height: '100%',
  },
  TextInput: {
    color: '#000',
    fontFamily: fonts.regular,
    paddingVertical: '3%',
    paddingHorizontal: '5%',
    marginVertical: '2%',
    alignContent: 'center',
  },
  Text: {
    fontFamily: fonts.bold,
    color: blueGreyColor.light,
  },
  GarminText: {
    fontFamily: fonts.bold,
    color: blueGreyColor.background,
  },
  GarminButton: {
    backgroundColor: blueGreyColor.light,
    alignSelf: 'center',
    width: '80%',
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  GroupedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});

export default profilesStyles;
