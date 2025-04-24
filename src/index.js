import dotenv from "dotenv";
dotenv.config();

import Express from "express";
const app = Express();
import cors from "cors";
import router from "./routes/routes.js";

app.use(Express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3001

app.listen(port, () => console.log("Server running on port 3000"));
