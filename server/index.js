import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from  'cors';
import dotenv from 'dotenv';
import postRouter from './routes/post.js'

const app=express();
dotenv.config();

// why body parser? https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express

// support parsing of application/json type post data
app.use(bodyParser.json({limit:"30mb",extended:"true"}));

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({limit:"30mb",extended:"true"}));

app.use(cors());
app.use('/posts',postRouter);

// our connection url of mongodb (mongoatlas)
// const CONNECTION_URL="mongodb+srv://GREEDnim:GREEDnimfullstack@cluster0.qtcsqsb.mongodb.net/?retryWrites=true&w=majority";
const PORT=process.env.PORT || 5000;

//connect with our mongodb cluster , second paramter is not required pola
//connect returns a promise, so we have to handle .then() {successful} and .catch() {unsuccessful}
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true })
.then(() =>app.listen(PORT, () => {console.log(`server is running on port ${PORT}`);}))
.catch((error)=> console.log(error.message));

//not required, just for warning
// mongoose.set('useFindAndModify',false);
//lmao even if this is not present, no warning lol