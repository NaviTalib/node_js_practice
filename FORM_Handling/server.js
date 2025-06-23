import express from 'express';


const app = express();
const PORT = 3000;

//middleware
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/form_submit', (req, res) => {
  console.log(req.body);
  res.send('Form Submitted Successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});