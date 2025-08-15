import {ReactNode} from 'react';
import {TextHierarchy} from '../../enums/Enums';
import {TextProps, TextStyle} from 'react-native';

export type TTextProperties = {
  children: ReactNode;
  type?: TextHierarchy;
  style?: TextStyle;
  customProps?: TextProps;
};
