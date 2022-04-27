const express = require('express');
const bodyParser = require('body-parser'); //npm, for POST requests
const mongodb = require('./db/connect');

// port 3000 for personal assignments
const port = process.env.PORT || 3000;
const app = express();

// In-line function
// app.get('/', (req, res) => {
// res.send('Hello World!')
// })

// ** app.use can be used to embed other applications
// routes.use('/admin', require('./admin'));
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  // .use('/', require('./routes'));
  .use('/individual', require('./routes/index'))
  .use('/contacts', require('./routes/contacts'));

// now connect to database...
mongodb.initDb((err, mongodb) => {
  if (err) {
      console.error(err);
  }
  else {
      app.listen(port);
      console.log(`Connect to DB and listen on port ${port}`);
  }
});
