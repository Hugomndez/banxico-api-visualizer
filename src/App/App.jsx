import { FetchProvider } from '../contexts';
import AppUI from './AppUI';

import './App.css';

function App() {
  return (
    <FetchProvider>
      <AppUI />
    </FetchProvider>
  );
}

export default App;
