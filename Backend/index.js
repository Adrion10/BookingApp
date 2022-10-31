import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./routes/authRoutes.js";
import userRoute from "./routes/userRoutes.js";
import hotelsRoute from "./routes/hotelsRoutes.js";
import roomsRoute from "./routes/roomsRoutes.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("MongoDb disconnected");
});

//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/authRoutes", authRoute);
app.use("/api/userRoutes", userRoute);
app.use("/api/hotelsRoutes", hotelsRoute);
app.use("/api/roomsRoutes", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8080, () => {
  connect();
  console.log("Connected to backend server");
});
