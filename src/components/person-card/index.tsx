import { Text } from '@geist-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { UserBasicResultDataModel } from '../../model/UserModel';
import { useGlobalStore } from '../../service/store';

import { Logo } from '../logo';
import styles from './index.module.scss';

const padId = (id: string) => id.padStart(7, '0');

const PersonCard = () => {
  const { infoStore } = useGlobalStore();
  const info = useRef<UserBasicResultDataModel>(JSON.parse(infoStore.info));

  return (
    <div className={styles.PersonCard}>
      <section className={styles.info}>
        <Link to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </Link>
        <Text className={styles.onlyId}>
          NO. <span>{padId(info.current.id)}</span>
        </Text>
      </section>
      <section className={styles.image}>
        <img
          src="https://source.unsplash.com/900x600/?winter,water"
          alt="winter"
        ></img>
      </section>
    </div>
  );
};

export { PersonCard };
