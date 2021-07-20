import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: theme.colors.shape,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 25,
    borderWidth: 7,
    borderColor: theme.colors.secondary
  },
});