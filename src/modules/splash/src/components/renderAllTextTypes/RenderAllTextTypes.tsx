import {FlatList} from 'react-native';
import React from 'react';
import {TextHierarchy} from '../../../../../@common/components/text/enums';
import {Text} from '../../../../../@common/components/Index';
import {styles} from './styles';

const RenderAllTextTypes = () => {
  const types = [
    {type: TextHierarchy.Heading, val: 'Heading Text'},
    {type: TextHierarchy.SubHeading, val: 'Sub Heading Text'},
    {type: TextHierarchy.Body, val: 'Body Text'},
    {type: TextHierarchy.Caption, val: 'Caption Text'},
  ];
  return (
    <FlatList
      data={types}
      renderItem={({item}) => (
        <Text type={item.type} style={styles.text}>
          {item.val}
        </Text>
      )}
    />
  );
};

export default RenderAllTextTypes;
