import React from 'react';
import { PlugIns, UserRoles } from 'types';
import { ReactComponent as DashboardSvg } from '../assets/icons/Dashboard.svg';

interface ISiderChildRoutes {
  id: string;
  label: string;
  path: string;
  icon: typeof DashboardSvg;
  component: React.FC;
  permissionsRequired?: Array<PlugIns>;
  authenticatedUsers?: Array<UserRoles>;
  display?: boolean;
  checkSubscription?: boolean;
}

interface SiderRoutes {
  path: string;
  component: React.FC;
  label: string;
  id: string;
  icon: typeof DashboardSvg;
  index?: boolean;
  subRoutes?: Array<SiderRoutes>;
  permissionsRequired?: Array<PlugIns>;
  authenticatedUsers?: Array<UserRoles>;
  children?: Array<ISiderChildRoutes>;
  rootNavigable?: boolean;
  display?: boolean;
  checkSubscription?: boolean;
}

export type { SiderRoutes };
