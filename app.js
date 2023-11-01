const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();
const connection = require('./config/database');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const travelerRouter = require('./routes/traveler');
const serviceProviderRouter = require('./routes/serviceProvider');
const {decode} = require("jsonwebtoken");

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// get bearer authentication token from Authorization header and verify if it has a field called user_id. if user_id is not null, then the token is valid
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = decode(token);
    const user_id = decoded.user_id;
    if (user_id) {
        // add user_id to req
        req.user_id = user_id;
        next();
    }
    else {
        res.status(401).json({msg: 'Token is not valid'});
    }
}
    // resolve the jwt using jwtresolve functio}


// add all routers
app.use('/traveler', authenticateJWT, travelerRouter);
app.use('/serviceprovider', authenticateJWT, serviceProviderRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  // show how to connect using URL
  console.log(`http://localhost:${port}/`);
});


