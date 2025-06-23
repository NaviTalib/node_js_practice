import express from 'express';
const app = express();

app.use(express.static('public'));

const PORT = 3000;

app.get('/', (req, res) => {
//   res.send('Hello World!');
    let name = 'Talib';
    let skills = ['Node.js','Express.js','EJS'];
    res.render('index.ejs',{name,userName:'Talib',age:25,skills});
    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });