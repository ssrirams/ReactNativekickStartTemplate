import {StyleSheet} from 'react-native';
import {Colors} from './assets/Colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: Colors.iconIntegrated.borderColor,
    backgroundColor: Colors.iconIntegrated.backgroundColor,
    color: Colors.iconIntegrated.color,
  },
  rightIcon: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  input: {
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  primaryTextInput: {
    borderWidth: 1,
    backgroundColor: Colors.primary.backgroundColor,
    borderColor: Colors.primary.borderColor,
    color: Colors.primary.color,
  },
  secondaryTextInput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    backgroundColor: Colors.secondary.backgroundColor,
    borderColor: Colors.secondary.borderColor,
    color: Colors.secondary.color,
  },
  iconIntegratedTextInput: {
    padding: 0,
    margin: 0,
  },
  disabledTextInput: {
    backgroundColor: Colors.disabled.backgroundColor,
    borderWidth: 1,
    borderColor: Colors.disabled.borderColor,
    color: Colors.disabled.color,
  },
  errorTextInput: {
    borderWidth: 1,
    borderColor: Colors.validated.borderColor,
    color: Colors.validated.color,
    backgroundColor: Colors.validated.backgroundColor,
  },
  errorMessage: {
    marginTop: -5,
    marginLeft: 10,
    color: Colors.validated.color,
    fontSize: 10,
  },
});
