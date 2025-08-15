import {StyleSheet} from 'react-native';
import {FontSize, FontWeight} from './assets/FontStyles';
import {Colors} from './assets/Colors';

export const styles = StyleSheet.create({
  headingText: {
    fontSize: FontSize.heading,
    fontWeight: FontWeight.heading,
    textAlign: 'center',
    color: Colors.primary,
  },
  subHeadingText: {
    fontSize: FontSize.subheading,
    fontWeight: FontWeight.subheading,
    textAlign: 'center',
    color: Colors.secondary,
  },
  bodyText: {
    fontSize: FontSize.body,
    fontWeight: FontWeight.body,
    textAlign: 'left',
    color: Colors.tertiary,
  },
  captionText: {
    fontSize: FontSize.caption,
    fontWeight: FontWeight.caption,
    textAlign: 'left',
    color: Colors.tertiary,
  },
});
