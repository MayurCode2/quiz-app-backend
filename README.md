# Quiz App

The Quiz App is a RESTful API that allows users to create quizzes, share them with participants, and track scores. It provides endpoints for registering users, creating quizzes, managing participants, and retrieving quiz data.

## Features

- User Registration: Allows new users to register by providing a unique username and password.
- Quiz Creation: Users can create quizzes by providing a title, questions, and answer choices.
- Participant Management: Facilitates the creation of participants for quizzes and tracks their scores.
- Protected Test Links: Generates protected test links with unique IDs and passwords for secure quiz access.
- Score Calculation: Automatically calculates participant scores based on the submitted answers.
- API Endpoints: Provides a set of RESTful API endpoints for interacting with the Quiz App.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Bcrypt.js

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- MongoDB

### Installation

1. Clone the repository:




The server will start running at `http://localhost:3000`.

## API Endpoints

- `POST /api/register` - Register a new user.
- `POST /api/login` - Login and authenticate a user.
- `POST /api/quizzes` - Create a new quiz.
- `GET /api/quizzes` - Get all quizzes.
- `POST /api/quizzes/:quizId/participants` - Create a new participant for a quiz.
- `GET /api/quizzes/:quizId/participants` - Get all participants for a quiz.
- `PUT /api/test/:quizId/participants/:participantId/submit` - Submit answers for a participant using the test link.
- `GET /api/participants/:participantId/score` - Get the score of a participant.

For detailed information about each endpoint, including request and response formats, please refer to the [API documentation](link-to-your-api-documentation).

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.



