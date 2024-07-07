import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

import userRouter from "./routers/user.routes";
import productRouter from "./routers/product.routes";
import categoryRouter from "./routers/category.routes";
import subCategoryRouter from "./routers/subCategory.routes";

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/sub-categories", subCategoryRouter);

const port = process.env.PORT || 3300;

app.listen(port, () => {
  console.log(`Server is running on port ${port} \nhttp://localhost:${port}`);
});
