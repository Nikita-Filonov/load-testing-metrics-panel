import dayjs from 'dayjs';
import { SettingsManager } from '../Config';

export const timeValueFormatter = (value: Date): string => dayjs(value).format(SettingsManager.apiTimeFormat);

export const dateTimeValueFormatter = (value: Date): string => dayjs(value).format(SettingsManager.apiDateTimeFormat);
