const express = require("express");
const app = express();
require('dotenv').config();
const cors = require("cors")

const { connection } = require("./config/config");
const TasksModel = require("./models/Tasks.model");
const userRouter = require("./controller/user");
const passport = require("./config/googleOauth")

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.use("/", userRouter)

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

app.patch("/:taskId/edit", async (req, res) => {
  const { taskId } = req.params;
  const { userID } = req.body;

  const task = await TasksModel.findOne({ _id: taskId });

  if (task.userID == userID) {
    const updated_Note = await TasksModel.findOneAndUpdate(
      { _id: taskId },
      req.body,
      { new: true },
    );

    return res.send({ message: "Successfully updated", updated_Note });
  } else {
    return res.send("You are not authorized to do this task");
  }
});

app.delete("/:taskId/delete", async (req, res) => {
  const { taskId } = req.params;
  const { userID } = req.body;

  const task = await TasksModel.findOne({ _id: taskId });

  if (task.userID == userID) {
    await TasksModel.findOneAndDelete({ _id: taskId });

    return res.send({ message: "Successfully Deleted" });
  } else {
    return res.send("You are not authorized to do this task");
  }
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['openid', 'profile', 'email'] }));

  app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false}),
  function(req, res) {
    // Successful authentication, redirect home.
    // console.log(req.user)
    // res.redirect('/');
    res.send({"message": "Login Successful", "user":req.user})
  });

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log("Listening to port 8000");
});
