import { useContext, useState } from 'react';
import { FetchContext } from '../../contexts';
import { ChartsLoader } from '../../components';
// eslint-disable-next-line
import Chart from 'chart.js/auto';
import { Line, Bar } from 'react-chartjs-2';
import './Charts.css';

const Charts = () => {
  const { status, data } = useContext(FetchContext);
  const [chartType, setchartType] = useState('Line');

  const ChartFormat = dataset => {
    let parsed = {};
    parsed.labels = dataset.map(item => item.fecha);
    parsed.datasets = [
      {
        data: dataset.map(item => Number(item.dato)),
        borderColor: 'rgb(17, 71, 217)',
        backgroundColor: 'rgb(17, 71, 217)',
        pointRadius: 0,
      },
    ];
    return parsed;
  };

  return (
    <section>
      {/* {status === 'idle' && <p>Handle empty chart</p> */}
      {status === 'fetching' && <ChartsLoader title={status} />}
      {status === 'fetched' && (
        <>
          <h2>Fetch Results:</h2>
          <div>
            <button
              type='button'
              className='item-button'
              onClick={() => {
                setchartType('Line');
              }}
            >
              Line Chart
            </button>
            <button
              type='button'
              className='item-button'
              onClick={() => {
                setchartType('Bar');
              }}
            >
              Bar Chart
            </button>
          </div>
          <div className='results-wrapper'>
            {data.bmx.series.map(item => (
              <div key={item.idSerie} className='item'>
                <p className='item-id'>{item.idSerie}</p>
                <span>--</span>
                <p className='item-title'>{item.titulo}</p>
                <div className='item-chart'>
                  {chartType === 'Line' && (
                    <Line
                      options={{
                        responsive: true,
                        plugins: { legend: { display: false } },
                      }}
                      data={ChartFormat(item.datos)}
                    />
                  )}
                  {chartType === 'Bar' && (
                    <Bar
                      options={{
                        responsive: true,
                        plugins: { legend: { display: false } },
                      }}
                      data={ChartFormat(item.datos)}
                    />
                  )}
                </div>
                {/* <button type='button' className='item-button'>
                  Download Chart
                </button> */}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Charts;
