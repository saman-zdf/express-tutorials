const express = require('express');
const { randomNum } = require('./postsFunction');

const routes = express.Router();

routes.get('/', (request, response) => {
  response.json(`Recieved a request on ${request.originalUrl}`);
});

routes.get('/:postID', (request, response) => {
  response.json(`Route param was ${request.params.postID}`);
});

routes.post('/:postID', (request, response) => {
  let submittedData = request.body;
  console.log(JSON.stringify(submittedData));

  const submittedName = request.body.name.toUpperCase();

  response.json(
    'We recieved the post request with these params: ' +
      submittedName +
      ' and color is ' +
      request.body.color
  );
});

routes.get('/randomNum', (req, res) => {
  res.json(randomNum().toString());
});

module.exports = routes;
