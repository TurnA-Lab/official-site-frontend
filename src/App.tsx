import { CssBaseline, GeistProvider } from '@geist-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Homepage } from './page/homepage';
import { GlobalStoreContext } from './service/store';

const App = observer(() => {
  const useGlobalStore = React.useContext(GlobalStoreContext);

  return (
    <>
      <GeistProvider theme={{ type: useGlobalStore.theme }}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
      </GeistProvider>
    </>
  );
});

export default App;
