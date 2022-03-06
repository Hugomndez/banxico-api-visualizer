import { useContext } from 'react';
import { Charts, Form, Header, Main } from '../components';
import { FetchContext } from '../contexts';

const AppUI = () => {
  const { status } = useContext(FetchContext);

  return (
    <>
      <Header />
      <Main>
        <Form />
        {status && <p>{status}</p>}
        {status === 'fetched' && <Charts />}
      </Main>
    </>
  );
};

export default AppUI;
