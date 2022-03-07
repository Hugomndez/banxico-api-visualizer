import { useContext } from 'react';
import { FetchContext } from '../../contexts';
import { ChartsLoader } from '../../components';
import './Charts.css';

const Charts = () => {
  const { status, data } = useContext(FetchContext);

  return (
    <section>
      {/* {status === 'idle' && <p>busquemos una series</p>} */}
      {status === 'fetching' && <ChartsLoader />}
      {status === 'fetched' && (
        <div>
          <h2>Fetch Results:</h2>
          {data.bmx.series.map(item => (
            <div key={item.idSerie}>
              <p>{item.idSerie}</p>
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Charts;
