# Note-taking-app
A full-stack web-based Note Taking Application that allows users to create, edit, delete, and organize notes with persistent database storage and RESTful API integration.

**Note taking App uses Following:**
- MongoDB for Database storage of users and their respective notes
- Express server
- Node.js
- Passport.js for Authentication
- EJS for rendering dynamic pages

---

## Configuration

1. Initialize NPM:

```bash
npm init -y
```

2. Install Packages

```bash
npm install
OR
npm i express ejs mongoose dotenv method-override node router
npm i -D nodemon
npm i passport passport-local express-session
```

3. Enable ES Modules:

In `package.json`, add:

```json
"type": "module"
```

Update Scripts:

```json
"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}
```

4. Create `.env`

```
PORT=3000 (Port you want to host your server on)
MONGO_URI= Copy and Paste your MongoDB Connection String here. Example: mongodb://127.0.0.1:27017/myNotesDB
```

5. Run Server:

```bash
npm start
```

6. Access app in browser by visiting (Replace 3000 with the PORT entered in .env)

```
localhost:3000/
```

7. Create a new User by clicking Sign up link
8. Login using new credentials
9. Create a New Note by clicking "Add Note"
10. Edit note using "Edit" and Update
11. Delete Note
12. Login as another user, observe each user can only access/ update their own notes

---

## Challenges

1. Merging user and notes route sometime created confusion along different files on paths to add at different places like EJS file POST requests, redirects, renders. On whether to use complete routes or partial routes

2. Running into errors while renderig EJS files as either user or notes data was not passed in controller, I only focused on actual function of controller in beginning , not about what all data is needed by EJS

3. Making notes routes simpler: I got the app running with userid and notesid in URL before passport authentication. After adding Passport authentication, i realized we have user data in req now and we don't need to pass it/ access it from params, that helped making my routes cleaner rather than using    /users/:userid/notes, i could use /notes
