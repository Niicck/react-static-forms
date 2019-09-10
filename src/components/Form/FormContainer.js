import React from 'react';
import { useRouteData } from 'react-static';
import { Switch, Route, Link } from 'react-router-dom';

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
      <Switch>
        {pages.map((page, i)=>(
          <Route
            key={i}
            path={`/forms/${data.name}/${page.heading}`}
            render={()=>(
              <FormPage fields={page.fields} />
            )}
          />
        ))}
      </Switch>
    </div>
  );
};

export default FormContainer;
