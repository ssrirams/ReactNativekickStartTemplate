import {ImageStyle, TextInputProps, TextStyle} from 'react-native';
import {IconPosition, TextInputHierarchy} from '../../enums/Enums';

export type TTextInputProperties = {
  type?: TextInputHierarchy;
  placeholder: string;
  style?: TextStyle;
  customProps?: TextInputProps;
  icon?: string;
  iconStyles?: ImageStyle;
  iconPosition?: IconPosition;
  isError?: boolean;
  errorMessage?: string;
  onChangeText: (text: string) => void;
  onEndEditing?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyPress?: () => void;
};
