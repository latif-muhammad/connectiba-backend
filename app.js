const express = require('express');

const bodyParser = require('body-parser');
const sequelize = require('./utilities/database');

// Routes
const authRoutes = require('./routes/auth');
const userRoute = require('./routes/user');
const adminRoute = require('./routes/admin');

const app = express();



// Middleware to parse JSON data
app.use(bodyParser.json());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json');
  next();
});


app.use('/auth', authRoutes);
app.use(userRoute);
app.use('/admin', adminRoute);



// Sync the model with the database
sequelize.sync().then((result) => {
  console.log(result.models);
  app.listen(8080);

})
  .catch((error) => {
    console.error('Error syncing User model:', error);
  });

