# nodejs-dev-foundation-final-project

## Project Objective:
Develop a Real-time Monitoring Dashboard that allows users to upload log files, process them to extract metrics, and view these metrics in real-time.

### Backend (Node.js):

    Setup:
        Initialize a new Node.js project.
        Install required packages: express, http, ws, events, multer, and util.

    WebSocket Implementation:
        Use the ws library to set up WebSocket communication.
        Listen for incoming metric data and store it.

    Log File Upload & Processing:
        Use multer for handling file uploads.
        Process the uploaded log file line-by-line to extract metrics.
        Emit the extracted metrics using the events module.

### Frontend (React):

    Setup:
        Code available in "dashboard" folder
        Run the dashboard

    Fetching & Displaying Metrics:
        Fetch historical metrics on component mount.
        Set up a WebSocket connection to listen for real-time metric updates.
        Update the dashboard UI with the received metrics.

### Unit Testing: (Bonus task)

    Backend Testing:
        Test the log file processing function to ensure it extracts metrics correctly.
        Test the WebSocket communication to ensure metrics are received correctly.

    Frontend Testing:
        Test the dashboard component to ensure it displays metrics correctly.
        Test the WebSocket connection in the frontend to ensure it receives real-time updates.


## Architecture


