import { PathMatch } from 'react-router-dom';
import { AppRoutes } from '../Constants/Routing';

export type RoutePathDefinition = {
  title: string;
  getTitle?: (match: PathMatch) => string;
  children?: RoutePathDefinition[];
  path: string;
};

export const ROUTE_PATH_DEFINITIONS: RoutePathDefinition[] = [
  { title: 'Home', path: AppRoutes.Home },
  { title: 'Dashboard', path: AppRoutes.Dashboard },
  {
    title: 'Results',
    path: AppRoutes.Results,
    children: [{ title: 'Result details', path: AppRoutes.ResultDetails }]
  },
  {
    title: 'Methods',
    path: AppRoutes.Methods,
    children: [{ title: 'Method details', path: AppRoutes.MethodsDetails }]
  }
];
