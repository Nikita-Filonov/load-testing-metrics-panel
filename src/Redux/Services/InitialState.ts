import { Service } from '../../Models/Services/Services';

export type ServicesInitialState = {
  service: Service;
  services: Service[];
};

export const INITIAL_SERVICES: ServicesInitialState = {
  service: {
    url: '',
    name: ''
  },
  services: []
};
