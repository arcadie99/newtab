import React, { useEffect, useState } from 'react';

function SystemProcesses() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/processes')
      .then(response => response.json())
      .then(data => setData(data.result))
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>System Processes</h1>
      <pre>{data}</pre>
    </div>
  );
}

export default SystemProcesses;
