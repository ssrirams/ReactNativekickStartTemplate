import {StyleSheet} from 'react-native';
import {Colors} from './assets/Colors';
import {FontSize, FontWeight} from './assets/FontStyles';

export const styles = StyleSheet.create({
  primaryButton: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 5,
    elevation: 5,
  },
  secondaryButton: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    elevation: 5,
  },
  confirmButton: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.confirm,
    borderRadius: 5,
    elevation: 5,
  },
  cancelButton: {
    padding: 10,
    margin: 10,
    backgroundColor: Colors.cancel,
    borderRadius: 5,
    elevation: 5,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: FontSize.buttonText,
    fontWeight: FontWeight.buttonText,
  },
});
