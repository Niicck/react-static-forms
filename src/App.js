import React, { Suspense } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Switch, Route } from 'react-router-dom'

import FormPage from 'components/Form/FormPage';
import Loading from './components/Pages/Loading';

addPrefetchExcludes(['forms/police-complain/']);

const App = () => (
  <Root>
    <div> yon header </div>
    <Suspense fallback={<Loading/>}>
      <Switch>
        <Route render={() => <Routes />} />
      </Switch>
    </Suspense>
    <div> yon footer </div>
  </Root>
);

export default App;
