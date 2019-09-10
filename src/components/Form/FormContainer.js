import React from 'react';
import { useRouteData } from 'react-static';
import { Router, Link } from '@reach/router'

import FormPage from 'components/Form/FormPage';
import { getPages } from 'helpers/data';

const FormContainer = (props) => {
  const data = useRouteData();
  const {pages} = data;

  return (
    <div>
      <h1>{`Welcome to ${data.name}`}</h1>
      <ul>
        {pages.map((page, i)=>(
          <li key={i}>
            <Link
              to={`/forms/${data.name}/${page.heading}`}
            >
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>
      <Router>
        {pages.map((page, i)=>{
          <FormPage
            key={i}
            path={`/forms/${data.name}/${page.heading}`}
            fields={page.fields}
          />
        })}
      </Router>
    </div>
  );
};

export default FormContainer;
