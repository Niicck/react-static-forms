import React from 'react';
import { useRouteData } from 'react-static';
import { Router } from '@reach/router'

import FormLanding from 'components/Form/FormLanding';
import FormPage from 'components/Form/FormPage';
import FormDummy from 'components/Form/FormDummy';
import { getPages } from 'helpers/data';

const FormContainer = (props) => {
  const data = useRouteData();
  const {pages} = data;

  return (
    <div>
      <Router>
        <FormLanding
          path={`/forms/${data.name}/`}
          data={data}
        />
        <FormDummy
          path={`/forms/${data.name}/*`}
          pages={pages}
        />
      </Router>
    </div>
  );

  // return (
  //   <div>
  //     <Router>
  //       <FormLanding
  //         path={`/forms/${data.name}/`}
  //         data={data}
  //       />
  //       {pages.length && pages.map((page, i)=>(
  //         <FormPage
  //           key={i}
  //           path={`/forms/${data.name}/${page.heading}`}
  //           fields={page.fields}
  //         />
  //       ))}
  //     </Router>
  //   </div>
  // );
};

export default FormContainer;
