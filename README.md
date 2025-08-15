# Avenue Code API

## Description

This project is a RESTful API for managing people information. It was developed using Node.js and Express, with support for automated testing using Jest and Supertest.

## Features

- **List People**: Retrieve a list of people with support for filtering by `firstName` and `lastName`.
- **Get Person by ID**: Retrieve the details of a specific person by their ID.
- **Create Person**: Add a new person to the system.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Framework for building APIs.
- **Jest**: Testing framework.
- **Supertest**: Library for integration testing.

## Project Structure

```
avenue-code/
├── src/
│   ├── app.js                # Main Express configuration
│   ├── server.js             # Server initialization
│   ├── controller/           # Business logic (Person Controller)
│   ├── routes/               # Route definitions (Person Router)
│   ├── data/                 # Mock data
│   └── __tests__/            # Automated tests
├── package.json              # Project settings and dependencies
├── jest.config.js            # Jest configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/andreypedro/avenue-code.git
   ```
2. Navigate to the project directory:
   ```bash
   cd avenue-code
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

### Start the Server

To start the server locally:

```bash
npm run dev
```

The server will be available at `http://localhost:3000`.

### Run Tests

To run the automated tests:

```bash
npm test
```

## Endpoints

### `GET /person/list`

- **Description**: Returns a list of people.
- **Query Parameters**:
  - `firstName` (optional): Filters by first name.
  - `lastName` (optional): Filters by last name.

### `GET /person/:id`

- **Description**: Returns the details of a person by ID.

### `POST /person`

- **Description**: Adds a new person.
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe"
  }
  ```
