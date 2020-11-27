import React from 'react';

import Layout from './molecules/Layout';
import appRoutes from './config/RouteConfig';

const App: React.FunctionComponent<any> = () => {
  return <Layout appRoutes={appRoutes} />;
};

export default App;
