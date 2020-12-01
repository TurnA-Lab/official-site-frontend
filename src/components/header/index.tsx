import { Button, Spacer } from '@geist-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../logo';
import { ToggleTheme } from '../toggle-theme';
import styles from './index.module.scss';
import { LoginModal } from './LoginModal';
import { GlobalStoreContext } from '../../service/store';
import { composeClassNames } from '../../utils/boost';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
  const useGlobalStore = React.useContext(GlobalStoreContext);

  return (
    <nav className={composeClassNames(styles.Header, 'section-container')}>
      <span>
        <Link to="/">
          <Logo />
        </Link>
      </span>
      <span>
        {useGlobalStore.token ? (
          <Link to="/zone">
            <Button auto type="abort">
              Zone
            </Button>
          </Link>
        ) : (
          <LoginModal />
        )}
        <Spacer x={0.5} inline />
        <ToggleTheme />
      </span>
    </nav>
  );
});

export { Header };
