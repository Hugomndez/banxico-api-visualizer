import './Form.css';

const Form = () => {
  return (
    <form id='apiForm'>
      <fieldset>
        <label htmlFor='token'>Token</label>
        <input itemType='text' id='token'></input>
        <p>
          You need a Banxico token. You can find it on:{' '}
          <a href='https://www.banxico.org.mx/SieAPIRest/service/v1/token'>
            https://www.banxico.org.mx/SieAPIRest/service/v1/token
          </a>
        </p>
      </fieldset>
      <fieldset>
        <label htmlFor='series'>Series</label>
        <input itemType='text' id='series'></input>
        <p>Example: SF61745, SP68257</p>
      </fieldset>
      <button>Fetch</button>
    </form>
  );
};

export default Form;
