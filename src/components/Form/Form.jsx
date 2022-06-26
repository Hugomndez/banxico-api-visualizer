import { useContext } from 'react';
import { FetchContext } from '../../contexts';

import './Form.css';

const Form = () => {
  const { setQuery, setToken } = useContext(FetchContext);

  const onKeyEnter = async event => {
    if (event.key === 'Enter') {
      await handleSubmit(event);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const tokenToFetch = event.currentTarget.token.value;
    const seriesToFetch = event.currentTarget.series.value;

    if (!tokenToFetch && !seriesToFetch) {
      return null;
    }

    if (tokenToFetch.length !== 64) {
      return null;
      //Handle Wrong token.
    }

    setQuery(seriesToFetch);

    setToken(tokenToFetch);

    event.currentTarget.series.value = '';
  };

  return (
    <form id='apiForm' onSubmit={handleSubmit} onKeyPress={onKeyEnter}>
      <fieldset>
        <label htmlFor='token'>Token</label>
        <input
          itemType='text'
          id='token'
          name='token'
          placeholder='Add Banxico Token'
          required
          autoFocus
        ></input>
        <p>
          You need a Banxico token. You can find it on: <br></br>
          <a
            href='https://www.banxico.org.mx/SieAPIRest/service/v1/token'
            target='_blank'
            rel='noreferrer'
          >
            https://www.banxico.org.mx/SieAPIRest/service/v1/token
          </a>
        </p>
      </fieldset>
      <fieldset>
        <label htmlFor='series'>Series</label>

        <input
          itemType='text'
          id='series'
          name='series'
          placeholder='Add Banxico Series'
          required
        ></input>

        <p>Example: SF61745,SP68257</p>
      </fieldset>
      <fieldset>
        <button type='submit'>Fetch</button>
      </fieldset>
    </form>
  );
};

export default Form;
