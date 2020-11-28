/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';
import { ProfileConfig } from '../../config/profileConfig/profile-config';
import './layout-styles.scss';

const ProfileHeader = React.lazy(() => import('../ProfileHeader'));
const Footer = React.lazy(() => import('../../atoms/Footer'));

type RouteObj = {
  id: number;
  link: string;
  title: string;
  component: any;
};

type Props = {
  appRoutes: Array<RouteObj>;
};

const Layout: React.FunctionComponent<Props> = ({ appRoutes = [] }: Props) => {
  return (
    <Suspense fallback="Loading...">
      <ProfileHeader headerConfig={ProfileConfig.header} />
      <main id="layout">
        <Router basename="">
          <Switch>
            {appRoutes.map((route) => {
              return (
                <Route
                  exact
                  key={route.id}
                  path={route.link}
                  render={(routeProps) => <route.component {...routeProps} />}
                />
              );
            })}
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </main>
      <Footer footerConfig={ProfileConfig.footer} />
    </Suspense>
  );
};

export default Layout;
