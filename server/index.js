import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./routes/users.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/users", userRoutes);

const CONNECTION_URL =
  "mongodb+srv://Shruti:Shruti@123@cluster0.xbiue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
