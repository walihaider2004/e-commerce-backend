import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';


// app cnfig 
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudinary()

// middleware
app.use(cors());
app.use(express.json());

// api endpoint
app.use('/api/user', userRouter)
app.get('/', (req, res) => {
  res.send('Hello World! This is the API endpoint.');
});

app.listen(port , ()=>console.log('server started on PORT : ' + port))