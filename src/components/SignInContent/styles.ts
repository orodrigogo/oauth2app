import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  content: {
    width: '100%',
    marginTop: 24
  },
  title: {
    color: theme.colors.secondary,
    fontFamily: theme.fonts.bold,
    fontSize: 32,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.text,
    fontSize: 15,
  },
  description: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.note,
    textAlign: 'justify',
    marginTop: 24,
  }
});