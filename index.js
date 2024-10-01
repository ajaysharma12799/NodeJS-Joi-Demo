import express from "express";
import router from "./routes";

const app = express();

app.use("/api", router);

app.listen(5555, () => {
    console.log("NODEJS-JOI-DEMO Server Running Successfully");
});
