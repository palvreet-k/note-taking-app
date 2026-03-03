# note-taking-app

> A simple, focused note-taking web app — create, edit, and delete notes with persistent storage.

---

![Status](https://img.shields.io/badge/status-active-brightgreen) ![Node](https://img.shields.io/badge/node-%3E%3D14-brightgreen)

## Table of Contents
- [About](#about)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Tech](#tech)
- [Notes](#notes)

---

## About

This repository contains a compact Node.js + Express app with Passport local authentication and MongoDB persistence for user notes. The README focuses on clear, scannable instructions.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start a MongoDB instance (local or cloud) and set environment variables:

```bash
export MONGO_URI="mongodb://localhost:27017/notes"
export PORT=3000
```

3. Run the app:

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Usage

- Sign up to create an account.
- Add, edit, and delete notes from your dashboard.

## Tech

- Node.js, Express
- EJS templates
- Passport (local strategy)
- MongoDB / Mongoose

## Notes

- This README was rewritten for clarity and styling only — no app behavior changes.

---

If you'd like a longer walkthrough, screenshots, or a quick demo script added, tell me which you'd prefer and I will extend this file.

Note taking App uses Following:
MongoDB for Database storage of users and their respective notes
Express server
Node.js
Passport.js for Authentication
EJS for rendering dynamic pages

Configuration:
1. Initialize NPM:
    npm init -y

2. Install Packages
    npm i express ejs mongoose dotenv method-override node router
    npm i -D nodemon
    npm i passport passport-local express-session
    
3. Enable ES MOdules:
    In package.json, add:
    "type": "module"

    Update Scripts:
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    }

4. Create .env

PORT=3000 (Port you want to host your server on)
MONGO_URI= Copy and Paste your MongoDB Connection String here. Example: mongodb://127.0.0.1:27017/myNotesDB

5. Run Server:
    npm start

6. Access app in browser by visiting (Replace 3000 with the PORT entered in .env)
  localhost:3000/

7. Create a new using by Going to Sign up link
8. Login using new credentials
9. Create a New Note by clicking "Add Note"
10. Edit note using "Edit" and Update
11. Delete Note
12. Login as another user, observe each user can only access/ update their own notes

Challenges:
1. Merging user and notes route sometime created confusion along different files on paths to add at different places like EJS file POST requests, redirects, renders. On whether to use complete routes or partial routes
2. Running into errors while renderig EJS files as either user or notes data was not passed in controller, I only focused on actual function of controller in beginning , not about what all data is needed by EJS
3. Making notes routes simpler: I got the app running with userid and notesid in URL before passport authentication. After adding Passport authentication, i realized we have user data in req now and we don't need to pass it/ access it from params, that helped making my routes cleaner rather than using    /users/:userid/notes, i could use /notes