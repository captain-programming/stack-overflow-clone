import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overfow clone API");
})

app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;

const CONNECTION_URL = "mongodb+srv://dinesh103:Dczx6hCgsHF8Ms7m@stack-overflow-clone.fw66dfl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
.catch((err) => console.log(err.message));