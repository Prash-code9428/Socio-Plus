# Socio Plus (SocialeX)
A modern, dynamic, and responsive full-stack social network web application. Connect with friends, share vibrant moments, and explore a dynamic world.

## Features
- **User Authentication**: Secure sign up and login with encrypted passwords.
- **Dynamic Feed**: View posts from friends, and create your own image or text posts.
- **Interactions**: Like and comment on posts.
- **Profiles**: View user profiles, follower/following counts, and user-specific posts.
- **Modern UI**: Clean and vibrant light-mode user interface designed for a premium user experience.

## Screenshots

### Login Page
![Login Page]
<img width="1907" height="954" alt="Screenshot 2026-04-09 233436" src="https://github.com/user-attachments/assets/4c3f6b23-6e56-4240-a470-5db00c5c9275" />


### Home Feed
![Home Feed]
<img width="1907" height="908" alt="Screenshot 2026-04-09 233453" src="https://github.com/user-attachments/assets/fd02a817-81bc-4e81-a7d8-541418065337" />


### User Profile
![User Profile]
<img width="1912" height="913" alt="Screenshot 2026-04-09 234152" src="https://github.com/user-attachments/assets/01f27495-ad18-4816-873e-9744d827c0ce" />


## Tech Stack
- **Frontend**: React.js, Vite, Bootstrap, Socket.IO Client
- **Backend**: Node.js, Express.js, Socket.IO
- **Database**: MongoDB (Mongoose)

## Run Locally

### Prerequisites
- Node.js installed
- MongoDB Cluster (Atlas)

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd SocialeX
```

### 2. Install Dependencies
**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the `server` directory and add your MongoDB connection string:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/socialeX?appName=Cluster0
```

### 4. Run the Application
**Backend:**
```bash
cd server
npm start # or node index.js
```

**Frontend:**
```bash
cd client
npm run dev
```

Visit `http://localhost:3000/` (or the port specified by Vite) to view the app.
