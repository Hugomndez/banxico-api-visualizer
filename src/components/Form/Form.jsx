import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [Token, setNewToken] = useState('');
  const [Series, setNewSeries] = useState('');
  const [data, setData] = useState(null);

  const API_URL = (series, token) =>
    `https://www.banxico.org.mx/SieAPIRest/service/v1/series/${series}?token=${token}`;

  const API_URL_SERIES = API_URL(Series, Token);

  const fetchData = (url, options = null) => {
    try {
      fetch(url, options)
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not OK');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          console.log(data);
        });
    } catch (error) {
      console.error(
        'There has been a problem with the fetch operation:',
        error
      );
    }
    return { data };
  };

  const onChangeToken = event => {
    setNewToken(event.target.value);
  };

  const onChangeSeries = event => {
    setNewSeries(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!Token && !Series) {
      return null;
    }
    fetchData(API_URL_SERIES);
  };

  const onKeyUp = event => {
    if (event.key === 'Enter') {
      onSubmit(event);
    }
  };

  return (
    <form id='apiForm' onSubmit={onSubmit} onKeyPress={onKeyUp}>
      <fieldset>
        <label htmlFor='token'>Token</label>
        <input
          itemType='text'
          id='token'
          value={Token}
          onChange={onChangeToken}
          placeholder='Add Your Token'
          minLength={64}
          maxLength={64}
          required
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
          value={Series}
          onChange={onChangeSeries}
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
