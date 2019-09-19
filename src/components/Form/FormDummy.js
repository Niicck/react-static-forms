import React from 'react';
import { useRouteData } from 'react-static';
import { Router } from '@reach/router'

import FormLanding from 'components/Form/FormLanding';
import FormPage from 'components/Form/FormPage';
import { getPages } from 'helpers/data';

const FormDummy = (props) => {
  const { pages } = props;
  console.log("We are in the dummy!")
  console.log("But where?", props.location)

  return (
    <div>
      Success
    </div>
  );
};

export default FormDummy;
