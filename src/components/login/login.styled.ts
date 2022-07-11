import {StyleSheet} from 'react-native';
import {blueGreyColor} from '../../shared/colorScheme.styled';
import {fonts} from '../../shared/fonts';

const loginStyles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: blueGreyColor.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  MainText: {
    fontSize: 48,
    color: blueGreyColor.secondary,
    fontFamily: fonts.bold,
    marginBottom: 10,
  },
  SubText: {
    fontSize: 32,
    color: blueGreyColor.secondary,
    fontFamily: fonts.regular,
    alignSelf: 'flex-start',
  },
  Card: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '80%',
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: blueGreyColor.background,
  },
  TextInput: {
    backgroundColor: blueGreyColor.background,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blueGreyColor.secondary,
    color: blueGreyColor.light,
    fontFamily: fonts.regular,
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    marginVertical: '2%',
  },
  Button: {
    backgroundColor: blueGreyColor.secondary,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: blueGreyColor.primary,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '4%',
    marginVertical: '2%',
  },
  Text: {
    fontFamily: fonts.bold,
  },
  BottomText: {
    fontFamily: fonts.regular,
    marginTop: 10,
  },
});

export default loginStyles;
