const express = require("express");
const app = express();
const { connection } = require("./config/config");
const TasksModel = require("./models/Tasks.model");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/tasks", async (req, res) => {
  // const { userID } = req.body;

  const userID = "63067449c85c097403975c1a";

  const tasks = await TasksModel.find({ _id: userID });

  res.send(tasks);
});

app.post("/tasks", async (req, res) => {
  let {
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    employees,
    highPriority,
    project,
    deadline,
    userID,
  } = req.body;

  const task = new TasksModel({
    title,
    description,
    time,
    creator,
    assigned,
    tag,
    employees,
    highPriority,
    project,
    deadline,
    userID,
  });

  await task.save();
  return res.send({ message: "task created", task });
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening to port 8000");
});
