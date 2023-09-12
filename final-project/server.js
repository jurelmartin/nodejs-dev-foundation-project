const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const chokidar = require('chokidar');
const EventEmitter = require('events');

const app = express();
const PORT = 3001;

const CSV_PATH = '2019.csv'; // Replace with the path to your CSV file

app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

class CsvEventEmitter extends EventEmitter {}
const csvEmitter = new CsvEventEmitter();

// Function to read and emit the CSV data
const emitCsvData = () => {
  let dataset = [];

  fs.createReadStream(CSV_PATH)
    .pipe(csv())
    .on('data', (row) => {
      dataset.push(row);
    })
    .on('end', () => {
      io.sockets.emit('newData', dataset);
    });
};

io.on('connection', (socket) => {
  console.log('New client connected');

  // Emit the current CSV data when a new client connects
  emitCsvData();

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Watch for changes in the CSV file
chokidar.watch(CSV_PATH).on('change', () => {
  console.log('CSV file changed.');
  csvEmitter.emit('csvChanged');
});

csvEmitter.on('csvChanged', () => {
  console.log('Reloading data...');
  emitCsvData();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
