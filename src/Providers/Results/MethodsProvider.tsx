import React, { FC, PropsWithChildren, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMethodDetails, setMethods } from '../../Redux/Results/ResultsSlice';
import { MethodsHTTPClient } from '../../Services/Clients/Results/MethodsHTTPClient';
import { GetMethodDetailsQuery, GetMethodsQuery } from '../../Models/Results/Methods';

interface Loading {
  getMethods: boolean;
  getMethodDetails: boolean;
}

export type MethodsContextProps = {
  loading: Loading;
  getMethods: (query: GetMethodsQuery) => Promise<void>;
  getMethodDetails: (query: GetMethodDetailsQuery) => Promise<void>;
};

const MethodsContext = React.createContext<MethodsContextProps | null>(null);

const MethodsProvider: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();
  const methodsHTTPClient = new MethodsHTTPClient();
  const [loading, setLoading] = useState<Loading>({
    getMethods: false,
    getMethodDetails: false
  });

  const getMethodsAPI = async (query: GetMethodsQuery) => {
    setLoading({ ...loading, getMethods: true });
    const response = await methodsHTTPClient.getMethods(query);
    response && dispatch(setMethods(response.methods));
    setLoading({ ...loading, getMethods: false });
  };

  const getMethodDetailsAPI = async (query: GetMethodDetailsQuery) => {
    setLoading({ ...loading, getMethodDetails: true });
    const response = await methodsHTTPClient.getMethodDetails(query);
    response && dispatch(setMethodDetails(response.details));
    setLoading({ ...loading, getMethodDetails: false });
  };

  return (
    <MethodsContext.Provider
      value={{
        loading,
        getMethods: getMethodsAPI,
        getMethodDetails: getMethodDetailsAPI
      }}>
      {children}
    </MethodsContext.Provider>
  );
};

const useMethods = () => {
  const event = useContext(MethodsContext);
  if (event == null) {
    throw new Error('useMethods() called outside of a MethodsProvider?');
  }
  return event;
};

export { MethodsProvider, useMethods };
