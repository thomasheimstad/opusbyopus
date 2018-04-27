import React from 'react';
import Helmet from 'react-helmet'

const Head = () => (
  <Helmet
    title="Grieg minutt for minutt"
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
      { name: 'mobile-web-app-capable', content: 'yes' },
    ]}
  />
)
export default Head;
