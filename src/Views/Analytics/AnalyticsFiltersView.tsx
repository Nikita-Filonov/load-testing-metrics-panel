import { WidgetView } from '../../Components/Views/WidgetView';
import { FC } from 'react';
import { BaseDateTimePicker } from '../../Components/Pickers/BaseDateTimePicker';
import { WidgetInfoRowsView } from '../../Components/Views/WidgetInfoRowsView';
import { SxProps, Theme } from '@mui/material';

export interface AnalyticsFilters {
  startDatetime: string;
  endDatetime: string;
}

type AnalyticsFiltersViewProps = {
  filters: AnalyticsFilters;
  setFilters: (filters: AnalyticsFilters) => void;
  containerSx?: SxProps<Theme>;
};

export const AnalyticsFiltersView: FC<AnalyticsFiltersViewProps> = (props) => {
  const { filters, setFilters, containerSx } = props;

  const onStartDatetime = (startDatetime: string | null) => startDatetime && setFilters({ ...filters, startDatetime });

  const onEndDatetime = (endDatetime: string | null) => endDatetime && setFilters({ ...filters, endDatetime });

  return (
    <WidgetView title={'Analytics filters'} sx={containerSx}>
      <WidgetInfoRowsView>
        <BaseDateTimePicker label={'Start datetime'} value={filters.startDatetime} onChange={onStartDatetime} />
        <BaseDateTimePicker label={'End datetime'} value={filters.endDatetime} onChange={onEndDatetime} />
      </WidgetInfoRowsView>
    </WidgetView>
  );
};
