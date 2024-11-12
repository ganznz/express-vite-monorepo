// load server env vars before anything else
import "./config/init.js";

import express from "express";
import { Response, Request } from "express";

const PORT = 8080;

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.get("/api", async (req: Request, res: Response) => {
    // can omit try-catch statement because we've installed express-async-handler package
    // error will be implicitly passed to error handling middleware
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// error handling middleware
app.use((err: Error, _req: Request, _res: Response) => {
    console.error(err);
});
