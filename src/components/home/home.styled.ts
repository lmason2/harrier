import {StyleSheet} from 'react-native';
import {blueGreyColor} from '../../shared/colorScheme.styled';

export const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: blueGreyColor.background,
  },
  TabBar: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: 85,
    backgroundColor: 'black',
    marginBottom: 0,
    width: '100%',
    paddingBottom: 10,
  },
});
