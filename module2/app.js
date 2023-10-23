require('dotenv').config();

const express = require('express');
const initializeDBConnection = require('./config/database');
const sensorRoute = require('./routes/sensorRoute');

const app = express();

app.use(express.json());

app.use('/api/sensor', sensorRoute);

initializeDBConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
