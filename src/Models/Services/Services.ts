export interface Service {
  url: string;
  name: string;
}

export interface GetServicesResponse {
  services: Service[];
}
