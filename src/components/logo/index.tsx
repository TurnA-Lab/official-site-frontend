/* 临时代替 LOGO */
/* 没办法，原来的 LOGO 太丑 */
/* TODO：替换 LOGO */

import React from 'react';
import { IconContext } from 'react-icons';
import { AiTwotoneExperiment } from 'react-icons/ai';
import styles from './index.module.scss';

const Logo = () => (
  <span>
    <IconContext.Provider value={{ className: styles.Logo }}>
      <AiTwotoneExperiment />
    </IconContext.Provider>
  </span>
);

export { Logo };
