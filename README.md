# Twitter Backend Project

## Overview

This project is a monolith-based architecture serving as the backend for a Twitter-like application. It utilizes the following technologies:

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Jest**: Testing framework for unit testing.
- **Cloudinary**: Cloud storage service for handling static images.
- **Passport**: Authentication middleware for Node.js.
- **bcrypt**: Library for encrypting passwords.
- **multer**: Node JS middleware for handling form-data.
- **jsonwebtoken**: Librry for generating JWT Tokens.

## Technology Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Testing Framework**: Jest

## Dependencies

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Express**: `npm install express`
- **MongoDB**: [MongoDB Installation Guide](https://docs.mongodb.com/manual/installation/)
- **Jest**: `npm install jest`
- **Cloudinary**: [Cloudinary Documentation](https://cloudinary.com/documentation)
- **Passport**: `npm install passport`
- **bcrypt**: `npm install bcrypt`

## Features

- User authentication with Passport.
- Password encryption using bcrypt.
- Image storage and retrieval through Cloudinary.
- Monolithic architecture for a streamlined backend.
- Authenticated Users should be able to post tweets, like on tweets, and comment on tweets.
- Users can upload static images while posting tweets.
- Users can be able to comment on tweets and comment on comments too.
- Users can filter hashtags separately.

## Testing

Unit tests have been implemented using Jest. To run the tests, use the following command:

```bash
npm test
```

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Twitter-Backend.git
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        MONGODB_URI=your_mongodb_connection_string
        CLOUDINARY_API_KEY=your_cloudinary_api_key
        CLOUDINARY_API_SECRET=your_cloudinary_api_secret
        ```

4. **Run the application:**
    ```bash
    npm start
    ```

5. **Testing:**
    - Run unit tests using Jest:
        ```bash
        npm test
        ```

6. **Access the application:**
    - Once the application is running, access it through your web browser at `http://localhost:3000` (or the specified port).

7. **Explore the API:**
    - Use tools like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to interact with the API endpoints.

8. **Enjoy building on top of the Twitter Backend!**

## Configuration

Ensure to set the following environment variables in your `.env` file:

- `MONGODB_URI`: MongoDB connection string.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.

## License

This project is licensed under the [MIT License](LICENSE).
