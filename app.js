import express, { urlencoded } from "express";
import conn from "./db/conn";

const app = express();

app.use(express.urlencoded({ extended: true }));

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
