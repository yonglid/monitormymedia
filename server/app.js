// import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './routes/main';
import cors from 'cors';
// set up dependencies
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
// added for deprecation warnings
mongoose.connect('mongodb://localhost/projectsupport', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
// set up route
app.use("/api", mainRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Project Support",
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});
