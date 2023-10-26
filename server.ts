import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './route/todo';
import mongoose from 'mongoose';

const main = async () => {
  dotenv.config();
  mongoose.set('strictQuery', false); // Deprecation warning
  await mongoose.connect(
    `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.hvl0d9x.mongodb.net/`,
  );
};

main()
  .then(() => console.log('Successfully connected mongoDB'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8080;
const app = express();

// middleware
app.use(cors());
app.use(express.json()); // To parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(testMiddlewareFunc);
// function testMiddlewareFunc(req: Request, res: Response, next) {
//   console.log('123');
//   // ...
//   next();
// }

app.use('/api', todoRoutes); //backend router전에 들리는곳

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
