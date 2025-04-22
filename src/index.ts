import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app =express();
const PORT = process.env.PORT || 5000 ;

//middleware
app.use(express.json());

//routes

app.get("/",(req, res)=>{
    res.send("API is running!")
});

//mongoose db connection

mongoose.connect(process.env.MONGO_URI as string)
.then(()=>{
    console.log("Mongo db connected");
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
})
.catch((err) => {
    console.error("MongoDB connection error ❌:", err);
  });
