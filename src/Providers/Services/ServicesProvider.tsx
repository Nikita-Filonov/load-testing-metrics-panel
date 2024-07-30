import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ServicesHTTPClient } from '../../Services/Clients/Services/ServicesHTTPClient';
import { setServices } from '../../Redux/Services/ServicesSlice';

interface Loading {
  getServices: boolean;
}

export type ServicesContextProps = {
  loading: Loading;
  getServices: () => Promise<void>;
};

const ServicesContext = React.createContext<ServicesContextProps | null>(null);

const ServicesProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const servicesHTTPClient = new ServicesHTTPClient();
  const [loading, setLoading] = useState<Loading>({
    getServices: false
  });

  const getServicesAPI = async () => {
    setLoading({ ...loading, getServices: true });
    const response = await servicesHTTPClient.getServices();
    response && dispatch(setServices(response.services));
    setLoading({ ...loading, getServices: false });
  };

  return (
    <ServicesContext.Provider value={{ loading, getServices: getServicesAPI }}>{children}</ServicesContext.Provider>
  );
};

const useServices = () => {
  const event = useContext(ServicesContext);
  if (event == null) {
    throw new Error('useServices() called outside of a ServicesProvider?');
  }
  return event;
};

export { ServicesProvider, useServices };
