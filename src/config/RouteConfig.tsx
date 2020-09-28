import React from 'react';

const Login = React.lazy(() => import('../pages/Login'));
const Profile = React.lazy(() => import('../pages/Profile'));

interface Route {
  id: number;
  link: string;
  title: string;
  component: any;
}

const Routes: Array<Route> = [
  {
    id: 0,
    link: '/',
    title: 'profile',
    component: Profile,
  },
  {
    id: 1,
    link: '/login',
    title: 'login',
    component: Login,
  },
];

export default Routes;
