import React, { Suspense } from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router, Link } from '@reach/router'

import FormPage from 'components/Form/FormPage';
import Loading from './components/Pages/Loading';

addPrefetchExcludes(['forms/police-complain/']);

const App = () => (
  <Root>
    <div> yon header </div>
    <Suspense fallback={<Loading/>}>
      <Router>
        <Routes default />
      </Router>
    </Suspense>
    <div> yon footer </div>
  </Root>
);

export default App;
