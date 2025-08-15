import {ViewStyle} from 'react-native';
import {ButtonHierarchy} from './enums';
import {ReactNode} from 'react';

export type TButtonProperties = {
  type?: ButtonHierarchy;
  onPress: () => void;
  style?: ViewStyle;
  children: ReactNode;
};
