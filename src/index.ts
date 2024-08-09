import express from "express";
import { BASE_ROUTE } from "./constants";
import baseRoutes from "./route";
import { corsConfig } from "./config";
import cors from "cors";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/notfound.middleware";
import { connectDb } from "./config/database.config";
const app = express();
app.use(cors(corsConfig));
app.use(express.json());
app.use(BASE_ROUTE, baseRoutes);
app.use(errorHandler);
app.use(notFoundHandler);
const startServer = async () => {
  try {
    await connectDb();
    app.listen(8080, () => {
      console.log("server listening at port number 8080");
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
