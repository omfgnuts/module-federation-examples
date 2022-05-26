import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const Component = dynamic(() => import('../async-pages/index'), { suspense: true });
const Page = props => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);
const page = import('../async-pages/index');
Page.getInitialProps = async ctx => {
  const getInitialProps = (await page).default?.getInitialProps;
  if (getInitialProps) {
    return getInitialProps(ctx);
  }
  return {};
};
export default Page;
