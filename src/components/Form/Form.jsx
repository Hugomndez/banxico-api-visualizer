import { useState } from 'react';
import './Form.css';

const Form = () => {
  const [newTokenValue, setNewTokenValue] = useState('');
  const [newSeriesValue, setNewSeriesValue] = useState('');

  const onChangeToken = event => {
    setNewTokenValue(event.target.value);
  };

  const onChangeSeries = event => {
    setNewSeriesValue(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!newTokenValue || !newSeriesValue) {
      return null;
    }
    console.log(newTokenValue);
    console.log(newSeriesValue);
  };

  const onKeyUp = event => {
    if (event.charCode === 13) {
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
          value={newTokenValue}
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
          value={newSeriesValue}
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
