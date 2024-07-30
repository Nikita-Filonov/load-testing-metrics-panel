import { INITIAL_ANALYTICS } from './InitialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestsPerSecondAnalytics } from '../../Models/Analytics/RequestsPerSecondAnalytics';
import { NumberOfRequestsAnalytics } from '../../Models/Analytics/NumberOfRequestsAnalytics';
import { ResponseTimesAnalytics } from '../../Models/Analytics/ResponseTimesAnalytics';

export const analyticsSlice = createSlice({
  name: 'analytics',
  initialState: INITIAL_ANALYTICS,
  reducers: {
    setMethodsResponseTimesAnalytics: (state, action: PayloadAction<ResponseTimesAnalytics[]>) => {
      state.methodsResponseTimesAnalytics = action.payload;
    },
    setMethodsNumberOfRequestsAnalytics: (state, action: PayloadAction<NumberOfRequestsAnalytics[]>) => {
      state.methodsNumberOfRequestsAnalytics = action.payload;
    },
    setMethodsRequestsPerSecondAnalytics: (state, action: PayloadAction<RequestsPerSecondAnalytics[]>) => {
      state.methodsRequestsPerSecondAnalytics = action.payload;
    },
    setResultsResponseTimesAnalytics: (state, action: PayloadAction<ResponseTimesAnalytics[]>) => {
      state.resultsResponseTimesAnalytics = action.payload;
    },
    setResultsNumberOfRequestsAnalytics: (state, action: PayloadAction<NumberOfRequestsAnalytics[]>) => {
      state.resultsNumberOfRequestsAnalytics = action.payload;
    },
    setResultsRequestsPerSecondAnalytics: (state, action: PayloadAction<RequestsPerSecondAnalytics[]>) => {
      state.resultsRequestsPerSecondAnalytics = action.payload;
    }
  }
});

export const {
  setMethodsResponseTimesAnalytics,
  setMethodsNumberOfRequestsAnalytics,
  setMethodsRequestsPerSecondAnalytics,
  setResultsResponseTimesAnalytics,
  setResultsNumberOfRequestsAnalytics,
  setResultsRequestsPerSecondAnalytics
} = analyticsSlice.actions;

export default analyticsSlice.reducer;
