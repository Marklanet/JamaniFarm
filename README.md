# Jamani Farm App

Welcome to Jamani!

Jamani is a friend of the farmer. It grows the crops along with the farmer providing support at each stage. This enable the farmer to obtain maximum yields from his/her farm and reduce loses. When a farmer encounters a challange, Jamani is there to support them and offer practical solutions.

It does this using adaptive learning. It uses gemini API and analyses the history of the farm. By analysing historical data of the farm, it is able to provide personalised support toilored for the specific needs of the specific farm.

## Project Overview

This repository contains the frontend and backend code for Jamani mobile APP. The backend is developed using nodejs and typescript. The frontend is developed using React Native and typescript. It is initialised using expo.

### Features Implemented

1. **User Authentication:**
   - Allows farmers authentication
2. **Chat, Storage and History:**
   - Both Text and Image chat are implemented
3. **Farm Management:**
   - A farmer can view his/her farm data

### Technology Stack

- **Frontend Framework:** React Native, Expo , Typescript
- **UI Library:** Native Tailwind CSS

### App Screenshots

**1st Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani0.png">

**1st Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani1.png">

**2nd Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani2.png">

**3rd Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani3.png">

**4rth Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani4.png">

**5th Page**
<img width="480" alt="Screenshot 2024-05-15 at 19 10 51" src="./frontend/product/jamani5.png">

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository.
2. Navigate to the `src/backend` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Server
   ```bash
   npm start
   ```
5. Navigate to `src/frontend` directory
6. Install dependencies:
   ```bash
   npm install
   ```
7. Start the App
   ```bash
   npm start
   ```

## Configuring Backend

Add a .env file with the following content.

    DB_HOST=localhost
    DB_USER=your_database
    DB_PASSWORD=your_password
    DB_NAME=farm_rafiki
    DB_PORT=3306
    JWT_SECRET=your_jwt_secret_key
    PORT=5000
    SALT_ROUNDS=10
    GOOGLE_GEMINI_API_KEY=your gemini api key

## Connecting backend with frontend

    In the frontend directory, there is a folder called lib, make sure the url provided in the appchat.tsx and appauth.tsx file is the url of your backends / erver

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

##

Thank you and happy coding!

I am also actively looking for a role as a full stack software engineer, I would appreciate any connections

My personal email is: markwrite114@gmail.com
