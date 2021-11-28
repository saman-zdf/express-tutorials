const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// We can receive JSON data from POST/PUT/PATCH/etc request
app.use(express.json());
// The same as above but for forms
app.use(express.urlencoded({ extended: true }));
app.get('/', (request, response) => {
  response.json({ message: "It's express tutorials on tuesday" });
});

const importPostRouting = require('./Post/postsRoutes');

app.use('/posts', importPostRouting);

app.listen(PORT, HOST, () => {
  console.log('Server is running on: ' + HOST + PORT);
});
