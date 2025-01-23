# Project Name
Xianinfotech assignment

## Description

This project is a web application built using React for the frontend and Node.js with Express and MongoDB for the backend. The application allows users to register, log in, and access a main page with various features.

## Features

- User registration and login
- MongoDB database integration
- Responsive design
- Navigation between different pages (Home, Register, Login, Main)

## Technologies Used

- **Frontend**: 
  - React
  - React Router
  - Axios
  - CSS

- **Backend**: 
  - Node.js
  - Express
  - Mongoose
  - MongoDB
  - dotenv

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)



### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add any necessary environment variables (if applicable).

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:

   ```plaintext
   MONGO_URI=mongodb+srv://<username>:<password>@clusterxian.xmup7.mongodb.net/?retryWrites=true&w=majority&appName=ClusterXian
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

### Running the Application

1. Start the backend server (if not already running):

   ```bash
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend application:

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

- **Register**: Navigate to the Register page to create a new account.
- **Login**: Use the Login page to access your account.
- **Main Page**: After logging in, you will be redirected to the Main page.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
