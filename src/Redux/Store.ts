import { configureStore } from '@reduxjs/toolkit';
import coreReducer from './Core/CoreSlice';
import resultsReducer from './Results/ResultsSlice';
import { persistStore } from 'redux-persist';
import analyticsReducer from './Analytics/AnalyticsSlice';
import servicesReducer from './Services/ServicesSlice';

export const store = configureStore({
  reducer: {
    core: coreReducer,
    results: resultsReducer,
    services: servicesReducer,
    analytics: analyticsReducer
  }
});
export const persistor = persistStore(store);
