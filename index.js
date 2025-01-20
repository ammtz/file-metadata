// index.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import multer from 'multer';

// Configure dotenv
dotenv.config();

const app = express();

// Middleware for parsing form data
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // index.html served automatically here

// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Handle file uploads
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const { originalname, mimetype, size } = req.file;

  // Respond with file metadata
  res.json({
    name: originalname,
    type: mimetype,
    size,
  });
});

// Server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
