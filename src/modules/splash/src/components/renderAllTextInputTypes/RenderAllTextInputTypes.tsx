import {FlatList} from 'react-native';
import React, {useCallback} from 'react';
import {
  IconPosition,
  TextInputHierarchy,
} from '../../../../../@common/components/textInput/enums';
import {TextInput} from '../../../../../@common/components/Index';

const RenderAllTextInputTypes = () => {
  const types = [
    {type: TextInputHierarchy.Primary, val: 'Primary TextInput'},
    {type: TextInputHierarchy.Secondary, val: 'Secondary TextInput'},
    {type: TextInputHierarchy.Disabled, val: 'Disabled TextInput'},
    {
      type: TextInputHierarchy.IconIntegrated,
      val: 'Icon Integrated TextInput with Icon at the left',
    },
    {
      type: TextInputHierarchy.IconIntegrated,
      val: 'Icon Integrated TextInput with Icon at the right',
    },
    {type: TextInputHierarchy.Validated, val: 'Validated TextInput'},
  ];
  const handleInputChange = useCallback((newText: string) => {
    console.log(newText);
  }, []);
  return (
    <FlatList
      data={types}
      renderItem={({item}) => (
        <TextInput
          placeholder={item.val}
          type={item.type}
          onChangeText={handleInputChange}
          iconPosition={
            item.val === 'Icon Integrated TextInput with Icon at the right'
              ? IconPosition.Right
              : undefined
          }
          isError={true}
          errorMessage="This is an example error message"
        />
      )}
    />
  );
};

export default RenderAllTextInputTypes;
