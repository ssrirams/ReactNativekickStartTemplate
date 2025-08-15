import {Text as RNText, TextStyle} from 'react-native';
import React, {memo, useCallback} from 'react';
import {TTextProperties} from './types';
import {TextHierarchy} from './enums';
import {styles} from './styles';

const Text: React.FC<TTextProperties> = props => {
  const {children, type = TextHierarchy.Body, style, customProps} = props;
  const getStylesBasedOnTextType = useCallback((): TextStyle => {
    switch (type) {
      case TextHierarchy.Heading:
        return styles.headingText;
      case TextHierarchy.SubHeading:
        return styles.subHeadingText;
      case TextHierarchy.Body:
        return styles.bodyText;
      case TextHierarchy.Caption:
        return styles.captionText;
      default:
        return styles.bodyText;
    }
  }, [type]);
  return (
    <RNText style={[getStylesBasedOnTextType(), style]} {...customProps}>
      {children}
    </RNText>
  );
};

export default memo(Text);
