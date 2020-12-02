import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../../components/header';
import { Content } from './Content';

const Homepage = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const handleSticky = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleSticky);

    return () => {
      window.removeEventListener('scroll', handleSticky);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Header sticky={sticky} />
      <Content />
    </>
  );
};

export { Homepage };
