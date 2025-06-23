import express from 'express';

const app = express();
const port = 3000;

// C = Create  => POST 
// R = Read    => GET
// U = Update  => PUT
// D = Delete  => DELETE

app.get('/',(req,res)=>{
    res.send(`<h1>CRUD using Express</h1>`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});