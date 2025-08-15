import {
  Image,
  TextInput as RNTextInput,
  TextStyle,
  View,
  ViewStyle,
  Text as RNText,
  StyleSheet,
} from 'react-native';
import React, {memo, useCallback} from 'react';
import {styles} from './styles';
import {TTextInputProperties} from './types';
import {Colors} from './assets/Colors';
import {IconPosition, TextInputHierarchy} from './enums';
import {images} from './assets/Images';

const fallBackImage = images.default;
const TextInput: React.FC<TTextInputProperties> = props => {
  const {
    type = TextInputHierarchy.Primary,
    placeholder,
    style,
    customProps,
    icon,
    iconStyles,
    isError = false,
    errorMessage,
    iconPosition,
    onChangeText,
    onBlur = () => {},
    onEndEditing = () => {},
    onFocus = () => {},
    onKeyPress = () => {},
  } = props;
  const getStylesBasedOnTextInputType = useCallback((): TextStyle => {
    switch (type) {
      case TextInputHierarchy.Primary:
        return styles.primaryTextInput;
      case TextInputHierarchy.Secondary:
        return styles.secondaryTextInput;
      case TextInputHierarchy.IconIntegrated:
        return styles.iconIntegratedTextInput;
      case TextInputHierarchy.Disabled:
        return styles.disabledTextInput;
      case TextInputHierarchy.Validated:
        return !isError ? styles.primaryTextInput : styles.errorTextInput;
      default:
        return styles.primaryTextInput;
    }
  }, [type, isError]);
  const getPlaceholderTextColor = useCallback((): string => {
    switch (type) {
      case TextInputHierarchy.Disabled:
        return Colors.disabled.color;
      case TextInputHierarchy.Validated:
        return !isError ? Colors.primary.color : Colors.validated.color;
      default:
        return Colors.primary.color;
    }
  }, [type, isError]);
  const checkType = useCallback(
    (hierarchy: TextInputHierarchy) => type === hierarchy,
    [type],
  );
  const getStylesForTheContainerBasedOnIconPosition =
    useCallback((): ViewStyle => {
      switch (iconPosition) {
        case IconPosition.Left:
          return styles.container;
        case IconPosition.Right:
          return StyleSheet.flatten([styles.container, styles.rightIcon]);
        default:
          return styles.container;
      }
    }, [iconPosition]);
  return (
    <View
      style={
        checkType(TextInputHierarchy.IconIntegrated)
          ? [getStylesForTheContainerBasedOnIconPosition(), style as ViewStyle]
          : {}
      }>
      {checkType(TextInputHierarchy.IconIntegrated) && (
        <Image
          source={icon || fallBackImage}
          style={[styles.icon, iconStyles]}
        />
      )}
      <RNTextInput
        placeholder={placeholder}
        style={[
          styles.input,
          getStylesBasedOnTextInputType(),
          checkType(TextInputHierarchy.IconIntegrated)
            ? style
            : (style as TextStyle),
        ]}
        selectionColor={Colors.primary.color}
        placeholderTextColor={getPlaceholderTextColor()}
        {...customProps}
        onChangeText={newText => onChangeText(newText)}
        onEndEditing={() => onEndEditing()}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onKeyPress={() => onKeyPress()}
        editable={!checkType(TextInputHierarchy.Disabled)}
      />
      {checkType(TextInputHierarchy.Validated) && isError && (
        <RNText style={styles.errorMessage}>* {errorMessage}</RNText>
      )}
    </View>
  );
};

export default memo(TextInput);
