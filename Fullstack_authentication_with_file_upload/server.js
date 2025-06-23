import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import path from 'path';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));

// Cloudinary Config
cloudinary.config({
    cloud_name: 'dcf0vk1os',
    api_key: '772794948236772',
    api_secret: 'LuIPNvLmQ4iaFe7WpdmD_GWHgXI'
});

// Database Connection
mongoose.connect('mongodb+srv://talibali786ta:RubQ6t2kolSYfE5N@cluster0.7w7wg.mongodb.net/', {
    dbName: 'test'
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err);
});

// Storage Configuration for Multer
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Mongoose Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    filename: String,
    public_id: String,
    imgUrl: String
});

const User = mongoose.model('user', userSchema);

// Routes

// Home Route (Login Page)
app.get('/', (req, res) => {
    res.render('login.ejs', { error: null });
});

// Register Page Route
app.get('/register', (req, res) => {
    res.render('register.ejs', { url: null });
});

// Profile Route (Only accessible if user ID is passed as a query)
app.get('/profile', async (req, res) => {
    const { userId } = req.query;
    
    if (!userId) {
        return res.redirect('/'); // Redirect to login if no user ID is provided
    }

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.redirect('/'); // Redirect to login if user not found
        }
        res.render('profile.ejs', { user });
    } catch (error) {
        console.error(error);
        res.redirect('/');
    }
});

// Register User Route
app.post('/register', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const file = req.file.path;
        const { username, email, password } = req.body;

        const cloudinaryResponse = await cloudinary.uploader.upload(file, { folder: 'image-uploader' });

        const newUser = await User.create({
            username,
            email,
            password,
            filename: req.file.originalname,
            public_id: cloudinaryResponse.public_id,
            imgUrl: cloudinaryResponse.secure_url
        });

        return res.redirect('/');  // Redirect to login page after registration

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password,name } = req.body;
    let user = await User.findOne({ email });

    if (!user || user.password !== password) {
        return res.render('login.ejs', { error: "Invalid email or password" });
    }

    // Redirect user to profile with user ID in the query string
    return res.redirect(`/profile?userId=${user._id}`);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
