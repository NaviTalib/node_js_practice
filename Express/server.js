import express from 'express';
import path from 'path';

const app = express();
const port = 4000;

// routing
app.get('/', (req, res) => {
  res.send(`<h1>Home</h1>`);
});
app.get('/about', (req, res) => {
  res.send(`<h1>About</h1>`);
});
app.get('/contact', (req, res) => {
  res.send(`<h1>Contact</h1>`);
});

// handling different methods
app.post('/login', (req, res) => {
  res.send(`<h1>POST Request received.</h1>`);
});
app.put('/update', (req, res) => {
  res.send(`<h1>PUT Request received.</h1>`);
});
app.delete('/remove', (req, res) => {
  res.send(`<h1>DELETE Request received.</h1>`);
});


// working with request and resposne

app.get('/info',(req,res) =>{
  console.log(req.query);
  console.log(req.params);
  console.log(req.headers);
  res.send('Info Received');
})


app.get('/user/:id/:name',(req,res) =>{
  console.log(req.params);
  res.send('User Received');
});

// sending respose in JSON

app.get('/json',(req,res) =>{
  res.json({name:'John',age:25});
});

// sending response in HTML file
const dir = path.resolve();
app.get('/html',(req,res) =>{
  res.sendFile(dir+'/index.html');
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});