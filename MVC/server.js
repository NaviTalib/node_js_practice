import express from 'express';
import mongoose from 'mongoose';
import {User} from './Models/User.js';


const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://talibali786ta:RubQ6t2kolSYfE5N@cluster0.7w7wg.mongodb.net/',{
    dbName:'test'
}).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log(err);
});

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
    });

app.post('/submitData', async (req, res) => {
    // console.log(req.body);
    try{
        let user = await User.create(req.body);
        res.send("Data submitted");

    }
    catch(err){
        console.log(err);
    }

});    
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });