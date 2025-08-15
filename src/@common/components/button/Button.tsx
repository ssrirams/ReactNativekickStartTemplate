import {TouchableOpacity, ViewStyle} from 'react-native';
import React, {memo, useCallback} from 'react';
import {TButtonProperties} from './types';
import {ButtonHierarchy} from './enums';
import {styles} from './styles';

const Button: React.FC<TButtonProperties> = props => {
  const {type, onPress, style, children} = props;

  const getStylesBasedOnButtonType = useCallback((): ViewStyle => {
    switch (type) {
      case ButtonHierarchy.Primary:
        return styles.primaryButton;
      case ButtonHierarchy.Secondary:
        return styles.secondaryButton;
      case ButtonHierarchy.Cancel:
        return styles.cancelButton;
      case ButtonHierarchy.Confirm:
        return styles.confirmButton;
      default:
        return styles.primaryButton;
    }
  }, [type]);
  return (
    <TouchableOpacity
      style={[getStylesBasedOnButtonType(), style]}
      onPress={() => onPress()}>
      {children}
    </TouchableOpacity>
  );
};

export default memo(Button);
