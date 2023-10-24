<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="node-logo.png" alt="Logo" width="150" height="80">
  </a>

  <h3 align="center">NodeJS Module 2 Project</h3>

  <p align="center">
    This application will simulate real-time data ingestion, have CRUD functionalities, and send email notifications when sensor data hits certain thresholds. Proper logging, data validation, and error handling.
    <br />
    <br />
    <br />
  </p>
</div>

### Built With

- [![NodeJS][NodeJS]][NodeJS-url]
- [![SendGrid][SendGrid]][SendGrid-url]
- [![MongoDB][MongoDB]][MongoDB-url]

## Getting Started

First, You must have Node.JS installed on your local machine. Once you have Node.JS you can just run the commands to start the project.

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/jurelmartin/nodejs-dev-foundation-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd module2
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the server on development mode (nodemon):

   ```bash
   npm run dev
   ```

5. Start the server on without nodemon:
   ```bash
   npm run start
   ```

## Usage

Here are the available endpoints:

- **POST /api/sensor**: Add a sensor data. It accepts JSON with `timestamp`, `temperature_celsius`, `humidity_percent`, and `pressure_hpa` fields.
- **GET /api/sensor**: Retrieve all sensor data. No pagination, you will get everything.
- **PUT /api/sensor/:id**: Update the sensor data with the specified ID. JSON body is similar to the POST route.
- **DELETE /api/sensor/:id**: Deletes the sensor data with the specified ID.

[SendGrid]: https://img.shields.io/badge/sendgrid-000000?style=for-the-badge&logo=gmail
[SendGrid-url]: https://app.sendgrid.com/
[NodeJS]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=node.js
[NodeJS-url]: https://nodejs.org/
[MongoDB]: https://img.shields.io/badge/mongodb-000000?style=for-the-badge&logo=mongodb
[MongoDB-url]: https://www.postgresql.org
