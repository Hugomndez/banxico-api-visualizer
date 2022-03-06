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
          placeholder='Add Your Token'
          minLength={64}
          maxLength={64}
          required
          autoFocus
        ></input>
        <p>
          You need a Banxico token. You can find it on:{' '}
          <a href='https://www.banxico.org.mx/SieAPIRest/service/v1/token'>
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
          placeholder='Add Series Number'
          required
        ></input>
        <p>Example: SF61745, SP68257</p>
      </fieldset>
      <button type='submit'>Fetch</button>
    </form>
  );
};

export default Form;
