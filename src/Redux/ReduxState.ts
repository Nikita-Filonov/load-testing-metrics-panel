import { ResultsInitialState } from './Results/InitialState';
import { CoreInitialState } from './Core/InitialState';
import { AnalyticsInitialState } from './Analytics/InitialState';
import { ServicesInitialState } from './Services/InitialState';

export interface ReduxState {
  core: CoreInitialState;
  results: ResultsInitialState;
  services: ServicesInitialState;
  analytics: AnalyticsInitialState;
}
