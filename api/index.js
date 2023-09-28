const expr = require('express');
const app = expr();
const multer = require('multer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute  = require('./routes/User');
const postRoute = require('./routes/Post');
const categoryRoute = require('./routes/Category');

// dotenv.config();
app.use(expr.json())

mongoose
.connect("mongodb://127.0.0.1:27017/blog-website")
.then(console.log('Connected to mongodb!'))
.catch((err)=>{console.error(err)});

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'images');
    },
    filename : (req,file,cb)=>
    {
        cb(null,req.body.name);
    }
});

const upload = multer({storage : storage});
app.post('/api/upload',upload.single('file'),(req,res)=>{
    res.status(200).json('File has been uploaded!')
})

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/categories',categoryRoute);


app.listen('5000',()=>{ console.log('Backend is running !')});