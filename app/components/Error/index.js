import React from 'react';
import { ratesApiUrl } from 'constants/urls';

const Error = () => (
  <article>
    <section className="page">
      <div>api error...</div>
      <div>check your access to <a href={ratesApiUrl}>api</a></div>
    </section>
  </article>);

export default Error;
