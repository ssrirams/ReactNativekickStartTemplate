import {FlatList} from 'react-native';
import React from 'react';
import {ButtonHierarchy} from '../../../../../@common/components/button/enums';
import {Button, Text} from '../../../../../@common/components/Index';
import {TextHierarchy} from '../../../../../@common/components/text/enums';
import {styles} from './styles';

const RenderAllButtonTypes = () => {
  const types = [
    {type: ButtonHierarchy.Primary, val: 'Primary Button'},
    {type: ButtonHierarchy.Secondary, val: 'Secondary Button'},
    {type: ButtonHierarchy.Cancel, val: 'Cancel Button'},
    {type: ButtonHierarchy.Confirm, val: 'Confirm Button'},
  ];
  return (
    <FlatList
      data={types}
      renderItem={({item}) => (
        <Button type={item.type} onPress={() => {}}>
          <Text type={TextHierarchy.SubHeading} style={styles.buttonText}>
            {item.val}
          </Text>
        </Button>
      )}
    />
  );
};

export default RenderAllButtonTypes;
