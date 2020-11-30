import { observer } from 'mobx-react-lite';
import { Header } from '../../components/header';

const Homepage = observer(() => {
  return (
    <>
      <Header />
    </>
  );
});

export { Homepage };
