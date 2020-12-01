import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../../components/header';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Header />
      <span>Homepage</span>
      <div
        style={{
          height: '200vh',
        }}
      ></div>
    </>
  );
};

export { Homepage };
