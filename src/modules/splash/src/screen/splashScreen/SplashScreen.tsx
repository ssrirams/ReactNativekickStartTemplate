import {FlatList, View} from 'react-native';
import React from 'react';
import {Button, Text} from '../../../../../@common/components/Index';
import {TextHierarchy} from '../../../../../@common/components/text/enums';
import {styles} from './styles';
import {
  RenderAllButtonTypes,
  RenderAllTextInputTypes,
  RenderAllTextTypes,
} from '../../components/Index';
import RenderDatePickerComponent from '../../components/renderDatePicerComponent/RenderDatePickerComponent';
import RenderTimePickerComponent from '../../components/renderTimePickerComponent/RenderTimePickerComponent';
import {SplashScreenProps} from './types/SplashScreenProps';
import {ButtonHierarchy} from '../../../../../@common/components/button/enums';

const SplashScreen: React.FC<SplashScreenProps> = props => {
  const {switchScreen} = props;
  const data = [
    {
      heading: 'Text',
      component: RenderAllTextTypes,
    },
    {
      heading: 'TextInput',
      component: RenderAllTextInputTypes,
    },
    {
      heading: 'Button',
      component: RenderAllButtonTypes,
    },
    {
      heading: 'Date Picker',
      component: RenderDatePickerComponent,
    },
    {
      heading: 'Time Picker',
      component: RenderTimePickerComponent,
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text type={TextHierarchy.SubHeading} style={styles.subheading}>
              {item.heading}
            </Text>
            <item.component />
          </View>
        )}
        ListHeaderComponent={() => (
          <Text type={TextHierarchy.Heading}>React Native Starter Kit</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListFooterComponent={() => (
          <Button
            type={ButtonHierarchy.Primary}
            onPress={() => {
              switchScreen();
            }}>
            <Text type={TextHierarchy.SubHeading}>Go to Login Screen</Text>
          </Button>
        )}
      />
    </View>
  );
};

export default SplashScreen;
