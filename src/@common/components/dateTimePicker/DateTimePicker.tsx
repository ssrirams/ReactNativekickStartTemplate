import React from 'react';
import {default as RNDatePicker} from 'react-native-date-picker';
import {TDateTimePickerProperties} from './types';

const DateTimePicker: React.FC<TDateTimePickerProperties> = props => {
  const {date = new Date(), mode, open, onConfirm, onCancel} = props;
  return (
    <RNDatePicker
      date={date}
      modal
      mode={mode}
      open={open}
      onCancel={onCancel}
      onConfirm={onConfirm}
    />
  );
};

export default DateTimePicker;
