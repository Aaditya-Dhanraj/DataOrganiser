import React from 'react';
import Head from 'next/head'
import withRedux from 'next-redux-wrapper';
import 'antd/dist/antd.css';

import "../public/vendors/style";
import "../styles/style.css"
import initStore from '../redux/store';
import {Provider} from "react-redux";
import AuthRoutes from "../util/AuthProvider";

const Page = ({Component, pageProps, store}) => {

  return (
    <>
      <Head>
        <title>Wieldy- Admin Dashboard</title>
      </Head>
      <>
        <Provider store={store}>
          <AuthRoutes>
            <Component {...pageProps} />
          </AuthRoutes>
        </Provider>
      </>
    </>
  );
};

export default withRedux(initStore)(Page);
