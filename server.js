const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); //npm, for POST requests
const mongodb = require('./db/connect');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

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
  // .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(cors())
  .use(express.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use((req, res, next) => {
    // Change * to specific websites if so desired
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  })
  .use('/', require('./routes'));
// .use('/', require('./routes/index'))
// .use('/', require('./routes/contacts'));

// now connect to database...
mongodb.initDb((err) => {
  if (err) {
    console.error(err);
  } else {
    app.listen(port);
    console.log(`Connect to DB and listen on port ${port}`);
  }
});
