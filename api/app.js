import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
console.log("sandip");

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running on port 8800");
});
