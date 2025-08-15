import {View} from 'react-native';
import React, {useState} from 'react';
import {DateTimePicker} from '../../../../../@common/components/dateTimePicker/Index';
import {DateTimeMode} from '../../../../../@common/components/dateTimePicker/enums';
import {Button, Text} from '../../../../../@common/components/Index';
import {ButtonHierarchy} from '../../../../../@common/components/button/enums';
import {TextHierarchy} from '../../../../../@common/components/text/enums';
import {ConvertDateTime} from '../../../../../@common/utils/date/ConvertDateTime';

const RenderDatePickerComponent = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDatePickerVisibility = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const handleDateConfirm = (date: Date) => {
    setSelectedDate(date);
    const convertedDate = ConvertDateTime(date);
    console.log('A date has been picked: ', convertedDate);
    handleDatePickerVisibility();
  };
  return (
    <View>
      <Button
        type={ButtonHierarchy.Primary}
        onPress={handleDatePickerVisibility}>
        <Text type={TextHierarchy.SubHeading}>Click to open Date Picker</Text>
      </Button>
      <DateTimePicker
        date={selectedDate}
        open={isDatePickerVisible}
        mode={DateTimeMode.Date}
        onCancel={handleDatePickerVisibility}
        onConfirm={handleDateConfirm}
      />
    </View>
  );
};

export default RenderDatePickerComponent;
