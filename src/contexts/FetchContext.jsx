import { createContext, useState, useMemo } from 'react';
import { useFetch } from '../hooks';

const FetchContext = createContext();

const FetchProvider = props => {
  const [query, setQuery] = useState('');
  const [token, setToken] = useState('');
  const API_URL =
    query &&
    `https://5i8qcjp333.execute-api.us-east-1.amazonaws.com/dev/series/${query}?token=${token}`;

  const options = useMemo(
    () => ({
      method: 'GET',
      headers: {
        Authorization:
          '01f04831044f073702d9244604d41c055e7c14bb96218e169926482fb5699788',
      },
    }),
    []
  );

  const { status, data } = useFetch(API_URL, options);

  return (
    <FetchContext.Provider
      value={{ query, setQuery, token, setToken, status, data }}
    >
      {props.children}
    </FetchContext.Provider>
  );
};

export { FetchContext, FetchProvider };
