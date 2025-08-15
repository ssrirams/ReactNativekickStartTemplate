import {DateTimeMode} from './enums';

export type TDateTimePickerProperties = {
  date: Date;
  mode: DateTimeMode;
  open: boolean;
  onCancel?: () => void;
  onConfirm?: (date: Date) => void;
};
