// Call in installed dependencies
const express = require('express');
// set up express app
const app = express();
// set up port number
const port = 5035;
// set up home route
app.get('/', (respond) => {
  respond.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, () => {
  console.log(`Our server is live on ${port}. Yay!`);
});