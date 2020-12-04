import { Avatar, Badge, Row, Spacer, Text, useTheme } from '@geist-ui/react';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import { UserBasicResultDataModel } from '../../model/UserModel';
import { useGlobalStore } from '../../service/store';
import { composeClassNames } from '../../utils/boost';

import { Logo } from '../logo';
import styles from './index.module.scss';

const padId = (id: string) => String(id).padStart(7, '0');

const PersonCard = () => {
  const { infoStore } = useGlobalStore();
  const info = useRef<UserBasicResultDataModel>(JSON.parse(infoStore.info));
  const theme = useTheme();

  // const flipRef = useRef<ReactSpringHook>(null);
  const [flipped, setFlipped] = useState(false);
  const { transformPerson, transformWork, opacity } = useSpring<{
    opacity: number;
    transformPerson: string;
    transformWork: string;
    // ref: MutableRefObject<ReactSpringHook> | null;
  }>({
    opacity: flipped ? 1 : 0,
    transformPerson: `perspective(600px) rotateY(${
      flipped ? 180 : 0
    }deg) rotateZ(${flipped ? 90 : 0}deg)`,
    transformWork: `perspective(600px) rotateY(${
      flipped ? 0 : -180
    }deg) rotateZ(${flipped ? 0 : 90}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    // ref: flipRef as MutableRefObject<ReactSpringHook>,
  });

  return (
    <div className={styles.container} onClick={() => setFlipped(!flipped)}>
      <animated.div
        className={composeClassNames(styles.card, styles.personCard)}
        style={{
          opacity: opacity.interpolate((o: any) => 1 - o),
          transform: transformPerson,
        }}
      >
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
          />
        </section>
      </animated.div>
      <animated.div
        className={composeClassNames(styles.card, styles.workCard)}
        style={{
          opacity,
          transform: transformWork,
        }}
      >
        <Avatar
          size="medium"
          src="https://avatars2.githubusercontent.com/u/48400568?s=60&v=4"
        />
        <Text h4>{info.current.name}</Text>
        <Row>
          <Badge
            style={{
              backgroundColor: theme.palette.alert,
            }}
          >
            {info.current.group || '无组别'}
          </Badge>
          <Spacer x={0.5} />
          <Badge
            style={{
              backgroundColor: theme.palette.violet,
            }}
          >
            {info.current.role || '无角色'}
          </Badge>
        </Row>
      </animated.div>
    </div>
  );
};

export { PersonCard };
