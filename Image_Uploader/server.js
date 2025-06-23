import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

cloudinary.config({ 
  cloud_name: 'dcf0vk1os', 
  api_key: '772794948236772', 
  api_secret: 'LuIPNvLmQ4iaFe7WpdmD_GWHgXI' 
});

mongoose.connect('mongodb+srv://talibali786ta:RubQ6t2kolSYfE5N@cluster0.7w7wg.mongodb.net/', {
    dbName: 'test'
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

app.get('/', (req, res) => {
  res.render('index.ejs', { url: null });
});

const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String
});

const File = mongoose.model('cloudinary', imageSchema);

app.post('/upload', upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file.path;
    const cloudinaryResponse = await cloudinary.uploader.upload(file, { folder: 'image-uploader' });

    const db = await File.create({
      filename: req.file.originalname,  // Fixed typo (req.file.originalname)
      public_id: cloudinaryResponse.public_id,
      imgUrl: cloudinaryResponse.secure_url
    });

    // Only send one response
    return res.render('index.ejs', { url: cloudinaryResponse.secure_url });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
