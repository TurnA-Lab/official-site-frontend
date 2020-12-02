import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Homepage } from './page/homepage';
import { Zone } from './page/zone';
import { useGlobalStore } from './service/store';

const App = observer(() => {
  // const useGlobalStore = React.useContext(GlobalStoreContext);
  const { themeStore } = useGlobalStore();

  return (
    <GeistProvider theme={{ type: themeStore.theme }}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/zone">
          <Zone />
        </Route>
      </Switch>
    </GeistProvider>
  );
});

export default App;
