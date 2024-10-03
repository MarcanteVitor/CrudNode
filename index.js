const express = require('express');
const cors = require('cors');
const app = express();
const routes = require("./src/routes/router");
const db = require('./src/database/db');


try {
    db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


app.use(cors());
app.use(express.json());
app.use("/pw26s/", routes);
app.listen(3000);