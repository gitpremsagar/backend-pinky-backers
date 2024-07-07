import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Server is running on port ${port} \nhttp://localhost:${port}`);
});
