import React, { useState, useEffect } from 'react';

// No html file is exported for dynamic routes at build time,
// which means the server won't have a file to serve when those routes are requested as the first entry point into your site.
// If you have a site with a lot of dynamic data, you may not want to flash the 404.html template on dynamic routes,
// or you may want to make a dynamic app shell or other server-side solution to make this smoother.
// One simple (but naive) way to do this is to make your 404 route only render after mount.
// Source: https://github.com/react-static/react-static/blob/master/docs/guides/dynamic-routes-reach-router.md
export default function NotFound() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return ready ? (
    <div>
      <h1>Page not found, so sorry.</h1>
    </div>
  ) : null;
}
