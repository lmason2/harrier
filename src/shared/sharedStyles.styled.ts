import {StyleSheet} from 'react-native';
import {blueGreyColor} from './colorScheme.styled';
const sharedStyles = StyleSheet.create({
  HorizontalRule: {
    backgroundColor: blueGreyColor.light,
    height: 1,
    width: '100%',
    marginVertical: 5,
  },
  HorizontalRuleDark: {
    backgroundColor: '#000',
    height: 1,
    width: '100%',
    marginVertical: 5,
  },
  ModalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default sharedStyles;
