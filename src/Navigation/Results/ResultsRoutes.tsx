import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute';

const ResultsPage = lazy(() => import('../../Pages/Results/ResultsPage'));
const ResultDetailsPage = lazy(() => import('../../Pages/Results/ResultDetailsPage'));

export const ResultsRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={true} />}>
        <Route index element={<ResultsPage />} />
        <Route path={'/:loadTestResultId'} element={<ResultDetailsPage />} />
      </Route>
    </Routes>
  );
};
