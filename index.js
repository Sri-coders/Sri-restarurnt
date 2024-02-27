import express from "express";
import cors from "cors";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
  const userdata = req.body;
  console.log(userdata)
  db.query("INSERT INTO userdetails SET ?", userdata, (err) => {
    if (err) {
      console.log("error in connection", err);
    } else {
      console.log("data inserted");
      res.json(userdata);
    }
  });
});

app.listen(8400, () => {
  console.log("port is running on 8400");
});
