export interface Method {
  method: string;
  service: string;
  averageResponseTime: number;
  averageNumberOfRequests: number;
  averageRequestsPerSecond: number;
}

export interface MethodDetails extends Method {
  averageMaxResponseTime: number;
  averageMinResponseTime: number;
  averageNumberOfFailures: number;
  averageFailuresPerSecond: number;
}

export interface GetMethodsQuery extends Record<string, string> {
  service: string;
}

export interface GetMethodsResponse {
  methods: Method[];
}

export interface GetMethodDetailsQuery extends Record<string, string> {
  method: string;
}

export interface GetMethodDetailsResponse {
  details: MethodDetails;
}
