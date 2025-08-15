import {View} from 'react-native';
import React, {useState} from 'react';
import {Button, Text} from '../../../../../@common/components/Index';
import {ButtonHierarchy} from '../../../../../@common/components/button/enums';
import {TextHierarchy} from '../../../../../@common/components/text/enums';
import DateTimePicker from '../../../../../@common/components/dateTimePicker/DateTimePicker';
import {DateTimeMode} from '../../../../../@common/components/dateTimePicker/enums';

const RenderTimePickerComponent = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const handleTimePickerVisibility = () => {
    setTimePickerVisibility(!isTimePickerVisible);
  };

  const handleTimeConfirm = (date: Date) => {
    setSelectedTime(date);
    handleTimePickerVisibility();
  };
  return (
    <View>
      <Button
        type={ButtonHierarchy.Primary}
        onPress={handleTimePickerVisibility}>
        <Text type={TextHierarchy.SubHeading}>Click to open Time Picker</Text>
      </Button>
      <DateTimePicker
        date={selectedTime}
        open={isTimePickerVisible}
        mode={DateTimeMode.DateTime}
        onCancel={handleTimePickerVisibility}
        onConfirm={handleTimeConfirm}
      />
    </View>
  );
};

export default RenderTimePickerComponent;
