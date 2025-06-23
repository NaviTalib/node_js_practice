import express from 'express';
import mongoose from 'mongoose';
import { shortUrl } from './Controllers/url.js';
import { Url } from './Models/Url.js';

const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://talibali786ta:RubQ6t2kolSYfE5N@cluster0.7w7wg.mongodb.net/', {
    dbName: 'test'
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
    res.render('index.ejs', { shortUrl: '' });
});

app.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    try {
        const urlEntry = await Url.findOne({ shortCode: shortId });  // ✅ Use 'shortCode' instead of 'shortId'

        if (!urlEntry) {
            return res.status(404).send("Short URL not found");
        }

        res.redirect(urlEntry.longUrl);  // ✅ Use 'longUrl' instead of 'originalUrl'
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

app.post('/short', shortUrl);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
