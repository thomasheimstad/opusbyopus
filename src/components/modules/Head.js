import React from 'react';
import Helmet from 'react-helmet'

const Head = () => (
  <Helmet
    title="Edvard Grieg - opus for opus"
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
      { name: 'mobile-web-app-capable', content: 'yes' },
    ]}
  />
)
export default Head;
