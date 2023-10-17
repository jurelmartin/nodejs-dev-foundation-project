const http = require('http');
const WebSocket = require('ws');
const fs = require('fs');
const csv = require('csv-parser');

const server = http.createServer((req, res) => {
  if (req.url === '/metrics') {
    fs.createReadStream('metrics.csv').pipe(res);
  } else {
    res.end('Not Found');
  }
});

const wss = new WebSocket.Server({server});

let lastModifiedTime = null;

function sendUpdatedDataToClients() {
  const csvData = [];
  // const fileStream = fs.createReadStream('metrics.csv', {encoding: 'utf8'});
  const fileStream = fs
    .createReadStream('metrics.csv')
    .pipe(csv())
    .on('data', (data) => csvData.push(data))
    .on('end', () => {
      console.log(csvData);
    });

  fileStream.on('end', () => {
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(csvData));
    });
  });
}

fs.watch('metrics.csv', (event, filename) => {
  if (event === 'change' && filename === 'metrics.csv') {
    const stats = fs.statSync('metrics.csv');
    if (!lastModifiedTime || stats.mtime > lastModifiedTime) {
      lastModifiedTime = stats.mtime;
      sendUpdatedDataToClients();
    }
  }
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
