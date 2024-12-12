import { StyleSheet } from 'react-native';
import { colors, fontFamily } from '@/styles/theme';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
  },
  image: {},
  content: {
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 24,
    fontFamily: fontFamily.bold,
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    marginBottom: 24,
  },
  footer: {
    marginTop: 24,
  },
  tickets: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors,
  },
});
