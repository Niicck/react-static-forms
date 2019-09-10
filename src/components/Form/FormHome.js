import React, { useState, useEffect } from 'react';
import { useRouteData } from 'react-static';
import { Link } from 'react-router-dom';

export default () => {
  const data = useRouteData();

  return (
    <div>
      <h1>Here are all of the forms</h1>
      <ul>
        {data.forms.map((form, i)=>(
          <li key={i}>
            <Link to={`/forms/${form.name}`}>
              {form.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
