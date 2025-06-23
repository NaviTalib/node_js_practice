import express from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';

const app = express();



// .env file configuration
config({path:'.env'});

const port = process.env.PORT;


// home route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API with Authentication!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});