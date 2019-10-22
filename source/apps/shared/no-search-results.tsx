import debug from 'debug';
import React from 'react';
import NoSSR from 'react-no-ssr';
import { environment } from '../../environment';

if (environment.DEBUG) {
  debug.enable(environment.DEBUG);
}

const Layout = require('../../layout/Layout').default;
const HeaderContainer = require('../../features/widgets/header/containers/HeaderContainer')
  .default;
const NoSearchResult = require('../../features/widgets/search/components/NoSearchResult')
  .default;
const FooterContainer = require('../../features/widgets/footer/containers/FooterContainer')
  .default;

export const NoSearchResultsPage = () => (
  <NoSSR>
    <Layout hasContainer>
      <HeaderContainer />
      <NoSearchResult />
      <FooterContainer />
    </Layout>
  </NoSSR>
);
