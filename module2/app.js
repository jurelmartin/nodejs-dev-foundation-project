require('dotenv').config();

const express = require('express');
const initializeDBConnection = require('./config/database');
const sensorRoute = require('./routes/sensorRoute');
const loggerMiddleware = require('./middleware/loggerMiddleware');

const app = express();

app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({extended: true}));

app.use(loggerMiddleware);

app.use('/api/sensor', sensorRoute);

initializeDBConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
