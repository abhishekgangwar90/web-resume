import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';

interface RouteObj {
  id: number;
  link: string;
  title: string;
  component: any;
}

interface Props {
  appRoutes: Array<RouteObj>;
}

const Layout: React.FunctionComponent<Props> = ({ appRoutes = [] }: Props) => {
  return (
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
  );
};

export default Layout;
