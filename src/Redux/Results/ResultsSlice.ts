import { INITIAL_RESULTS } from './InitialState';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadTestResult, LoadTestResultDetails } from '../../Models/Results/LoadTestResults';
import { MethodResult } from '../../Models/Results/MethodResults';
import { HistoryResult } from '../../Models/Results/HistoryResults';
import { RatioResult } from '../../Models/Results/RatioResults';
import { Method, MethodDetails } from '../../Models/Results/Methods';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: INITIAL_RESULTS,
  reducers: {
    setLoadTestResults: (state, action: PayloadAction<LoadTestResult[]>) => {
      state.loadTestResults = action.payload;
    },
    setLoadTestResultsTotal: (state, action: PayloadAction<number>) => {
      state.loadTestResultsTotal = action.payload;
    },
    setLoadTestResultDetails: (state, action: PayloadAction<LoadTestResultDetails>) => {
      state.loadTestResultDetails = action.payload;
    },
    setMethodResults: (state, action: PayloadAction<MethodResult[]>) => {
      state.methodResults = action.payload;
    },
    setHistoryResults: (state, action: PayloadAction<HistoryResult[]>) => {
      state.historyResults = action.payload;
    },
    setRatioResultsTotal: (state, action: PayloadAction<RatioResult[]>) => {
      state.ratioResultsTotal = action.payload;
    },
    setRatioResultsPerClass: (state, action: PayloadAction<RatioResult[]>) => {
      state.ratioResultsPerClass = action.payload;
    },
    setMethods: (state, action: PayloadAction<Method[]>) => {
      state.methods = action.payload;
    },
    setMethodDetails: (state, action: PayloadAction<MethodDetails>) => {
      state.methodDetails = action.payload;
    }
  }
});

export const {
  setLoadTestResults,
  setLoadTestResultsTotal,
  setLoadTestResultDetails,
  setMethodResults,
  setHistoryResults,
  setRatioResultsTotal,
  setRatioResultsPerClass,
  setMethods,
  setMethodDetails
} = resultsSlice.actions;

export default resultsSlice.reducer;
