/* eslint-disable import/no-unresolved */
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';
import { useStyles } from './layout-styles';

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
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Suspense fallback="Loading...">
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
      </Suspense>
    </div>
  );
};

export default Layout;
