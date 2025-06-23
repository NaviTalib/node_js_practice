import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://talibali786ta:RubQ6t2kolSYfE5N@cluster0.7w7wg.mongodb.net/',{
    dbName: 'newTest',
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database: ', err);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});