# Backend for Campus Event Management Hub

This is the backend service for the Campus Event Management Hub, a platform designed to manage and discover campus events. The backend is built using Node.js and Express, and it connects to a PostgreSQL database.

## Features

- **Event Management**: Create, retrieve, and manage events.
- **User Authentication**: Register and login users with role-based access.
- **Database Integration**: Uses PostgreSQL for data storage.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- PostgreSQL

### Installation

1. Clone the repository:

   ````bash
   git clone <repository-url>   ```

   ````

2. Navigate to the backend directory:

   ````bash
   cd Backend   ```

   ````

3. Install the dependencies:
   ````bash
   npm install   ```
   ````

### Configuration

1. Set up your PostgreSQL database and update the connection string in `Backend/config/db.js`:

   ````javascript:Backend/config/db.js
   startLine: 3
   endLine: 5   ```

   ````

2. Create a `.env` file in the `Backend` directory and add your environment variables:
   ````plaintext
   DB_CONNECTION_STRING=your_database_connection_string   ```
   ````

### Running the Server

To start the server, run:

```bash
npm start
```

The server will run on `http://localhost:3000`.

### API Endpoints

- **Events**

  - `GET /api/events/getEvents`: Retrieve all events.
  - `POST /api/events/createEvent`: Create a new event.

  ```javascript:Backend/routes/eventRoutes.js
  startLine: 5
  endLine: 6
  ```

- **Authentication**

  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login a user.

  ```javascript:Backend/routes/authRoutes.js
  startLine: 5
  endLine: 6
  ```

### Project Structure

- `server.js`: Entry point of the application.
- `routes/`: Contains route definitions for events and authentication.
- `controllers/`: Contains logic for handling requests.
- `config/`: Database configuration.

### Dependencies

- **Express**: Web framework for Node.js.
- **Nodemon**: Utility for automatically restarting the server.
- **pg**: PostgreSQL client for Node.js.
- **Cors**: Middleware for enabling CORS.

```json:Backend/package.json
startLine: 13
endLine: 18
```

### Development

To run the server in development mode with live-reloading, use:

```bash
npm run dev
```

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

### License

This project is licensed under the ISC License.
