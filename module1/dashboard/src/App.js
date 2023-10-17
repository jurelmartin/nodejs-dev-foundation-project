import React, {useState, useEffect} from 'react';
// import socketIoClient from 'socket.io-client';
import DataTable from './DataTable';

const ENDPOINT = 'http://localhost:3001/metrics';

function App() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setDatasets(data);
      })
      .catch((error) => {
        console.error('Error fetching initial data:', error);
      });

    const ws = new WebSocket('ws://localhost:3001/metrics');

    ws.onmessage = (message) => {
      console.log('data', message.data);

      setDatasets(JSON.parse(message.data));
    };

    // return () => socket.disconnect();
  }, []);

  return (
    <div>
      <DataTable data={datasets} />
    </div>
  );
}

export default App;
