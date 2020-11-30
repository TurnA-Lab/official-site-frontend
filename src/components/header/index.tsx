import { Button, Spacer } from '@geist-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo';
import { Section } from '../section';
import { ToggleTheme } from '../toggle-theme';
import styles from './index.module.scss';
import { LoginModal } from './LoginModal';

const Header = () => (
  <Section>
    <nav className={styles.Header}>
      <span>
        <Link to="/">
          <Logo />
        </Link>
      </span>
      <span>
        <LoginModal />
        <Spacer x={0.5} inline />
        <ToggleTheme />
      </span>
    </nav>
  </Section>
);

export { Header };
