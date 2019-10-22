import React from 'react';
import NoSSR from 'react-no-ssr';
import { environment } from '../environment';

let Page = () => <NoSSR />;
if (environment.IS_CLIENT) {
  if (environment.IS_RUST_CLIENT) {
    Page = require('../apps/rust/index').IndexPage;
  } else {
    // Haskell Client
    Page = require('../apps/haskell/index').IndexPage;
  }
}

export default Page;
