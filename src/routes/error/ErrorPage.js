import React, { PropTypes } from 'react';
import './ErrorPage.css';

function ErrorPage({ error }) {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div>
        <h1>{error.name}</h1>
        <p>{error.message}</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }

  return (
    <div>
      <h1>Error</h1>
      <p>Sorry, a critical error occurred on this page.</p>
    </div>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.object.isRequired,
};

export { ErrorPage as ErrorPageWithoutStyle };
export default ErrorPage;
