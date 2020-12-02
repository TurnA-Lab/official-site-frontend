import React from 'react';
import { Helmet } from 'react-helmet';
import { ErrorPopup } from '../../components/ErrorPopup';
import { PersonCard } from '../../components/person-card';

const Zone = () => (
  <>
    <Helmet>
      <title>Zone</title>
    </Helmet>
    <ErrorPopup>
      <PersonCard />
    </ErrorPopup>
  </>
);

export { Zone };
