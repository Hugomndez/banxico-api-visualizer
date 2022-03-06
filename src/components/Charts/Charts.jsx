import { useContext } from 'react';
import { FetchContext } from '../../contexts';

const Charts = () => {
  const { data } = useContext(FetchContext);

  return (
    <div>
      {data.bmx.series.map(item => (
        <div key={item.idSerie}>
          <p>{item.idSerie}</p>
          <p>{item.titulo}</p>
          <p>{item.fechaInicio}</p>
        </div>
      ))}
    </div>
  );
};

export default Charts;
