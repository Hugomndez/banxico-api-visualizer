import { useState } from 'react';
import { useFetch } from '../../hooks/';
import './Form.css';

const Form = () => {
  const [query, setQuery] = useState('');
  const [token, setToken] = useState('');

  const API_URL =
    query &&
    `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${query}?token=${token}`;

  const fetchOptions = {
    method: 'GET',
    headers: {
      Authorization:
        '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
    },
  };

  const { status, data } = useFetch(API_URL, fetchOptions);

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
    <>
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
      {status && <p>{status}</p>}
      {status === 'fetched' && (
        <div>
          {data.bmx.series.map(item => (
            <div key={item.idSerie}>
              <p>{item.idSerie}</p>
              <p>{item.titulo}</p>
              <p>{item.fechaInicio}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
