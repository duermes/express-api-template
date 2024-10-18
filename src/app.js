import express from "express";
import "dotenv/config";
import "express-async-errors";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import "reflect-metadata";
import { AppDataSource } from "./data-source.js";
import productsRouter from "./routes/product.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>API</h1><a href="/api/v1/products">routes</a>');
});

// app.use("/api/products", productsRouter);
// app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    AppDataSource.initialize().catch((error) => console.log(error));
    app.listen(PORT, console.log(`Server running at http://localhost:${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
