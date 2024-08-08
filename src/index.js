import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { register, login, getMe } from "./controllers/auth.mjs";
import { registrationValidation, loginValidation } from "./validations/auth.mjs";
import handleValidationsErrors from "./utils/handleValidationsErrors.mjs";
import checkAuth from "./middlewares/checkAuth.mjs";

mongoose
  .connect(
    "mongodb+srv://Monoblade:au8vZDM8kHgBsJy@maincluster.y9ksfln.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.post(
  "/api/auth/register",
  registrationValidation,
  handleValidationsErrors,
  register
);
app.post("/api/auth/login", loginValidation, handleValidationsErrors, login);
app.get("/api/auth/me", checkAuth, getMe);

app.listen(5000, () => console.log("Server started on port 5000"));
