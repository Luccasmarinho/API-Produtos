import dotenv from "dotenv";
dotenv.config();

import Express from "express";
const app = Express();
import cors from "cors";
import router from "./routes/routes.js";

app.use(Express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => console.log("Server running on port 3000"));
