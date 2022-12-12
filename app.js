import express from "express";

// Hello world server

const app = express();

app.get("/", (_, res) => {
  response.status(200).json({ message: "Hello world" });
});

app.listen(5004, () => console.log("Server started on 5004"));
