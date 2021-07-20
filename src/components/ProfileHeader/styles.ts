import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: getStatusBarHeight() + 58,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: .3
  },
  welcome: {
    width: '100%',
  },
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.text,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.text,
    fontSize: 14,
    marginTop: -7
  },
});