import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router'

const FormLanding = ({data}) => {
  console.log("On the form landing")
  return (
    <div>
      <h1>{`Welcome to ${data.name}`}</h1>
      <ul>
        {data.pages.map((page, i)=>(
          <li key={i}>
            <Link
              to={`/forms/${data.name}/${page.heading}`}
            >
              {page.heading}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormLanding;
