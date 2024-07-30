import { LoadTestResult, LoadTestResultDetails } from '../../Models/Results/LoadTestResults';
import { MethodResult } from '../../Models/Results/MethodResults';
import { HistoryResult } from '../../Models/Results/HistoryResults';
import { RatioResult } from '../../Models/Results/RatioResults';
import { Method, MethodDetails } from '../../Models/Results/Methods';

export type ResultsInitialState = {
  loadTestResults: LoadTestResult[];
  loadTestResultsTotal: number;
  loadTestResultDetails: LoadTestResultDetails;
  methodResults: MethodResult[];
  historyResults: HistoryResult[];
  ratioResultsTotal: RatioResult[];
  ratioResultsPerClass: RatioResult[];
  methods: Method[];
  methodDetails: MethodDetails;
};

export const INITIAL_RESULTS: ResultsInitialState = {
  loadTestResults: [],
  loadTestResultsTotal: 0,
  loadTestResultDetails: {
    id: 0,
    service: '',
    startedAt: '',
    finishedAt: '',
    totalRequests: 0,
    numberOfUsers: 0,
    triggerCIPipelineUrl: null,
    triggerCIProjectTitle: null,
    triggerCIProjectVersion: null,
    loadTestsCIPipelineUrl: null,
    totalRequestsPerSecond: 0,
    totalFailures: 0,
    totalFailuresPerSecond: 0,
    averageResponseTime: 0,
    maxResponseTime: 0,
    minResponseTime: 0,
    compare: null
  },
  methodResults: [],
  historyResults: [],
  ratioResultsTotal: [],
  ratioResultsPerClass: [],
  methods: [],
  methodDetails: {
    method: '',
    service: '',
    averageResponseTime: 0,
    averageNumberOfRequests: 0,
    averageRequestsPerSecond: 0,
    averageMaxResponseTime: 0,
    averageMinResponseTime: 0,
    averageNumberOfFailures: 0,
    averageFailuresPerSecond: 0
  }
};
