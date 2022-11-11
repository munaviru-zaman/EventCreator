const express = require("express");
const registerService = require("./services/registerService");
const eventService = require("./services/eventservice");
const deletedService = require("./services/deletedEvents");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.get("/getapp", (req, res) => {
  res.send("this is get function");
});

app.post("/postapp", (req, res) => {
  res.send("This is a post function");
});

app.post("/signup", (req, res) =>
  registerService
    .signUp(req.body.userId, req.body.dob, req.body.email, req.body.pswd)
    .then((result) => {
      res.status(result.statusCode).json(result);
    })
);

app.post("/login", (req, res) => {
  registerService.login(req.body.email, req.body.pswd).then((result) => {
    res.status(result.statusCode).json(result);
  });
});

app.post("/eventcreate", (req, res) => {
  eventService
    .eventCreate(
      req.body.event_name,
      req.body.event_date,
      req.body.userId,
      req.body.priority
    )
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.get("/events/:userId", (req, res) => {
  eventService.eventTable(req.params.userId).then((result) => {
    res.json(result);
  });
});

app.get("/deleteevent/:event_name/:event_date", (req, res) => {
  eventService
    .singleEvent(req.params.event_name, req.params.event_date)
    .then((result) => {
      res.json(result);
    });
});

app.delete("/deleting/:event_name/:event_date", (req, res) => {
  deletedService
    .deleteEvent(req.params.event_name, req.params.event_date)
    .then((result) => {
      res.status(result.statusCode).json(result);
    });
});

app.post("/deletedEvent", (req, res) => {
  deletedService
    .deletedEvent(
      req.body.event_name,
      req.body.event_date,
      req.body.userId,
      req.body.priority
    )
    .then((result) => {
      res.json(result);
    });
});

app.get("/deletedEvents/:userId", (req, res) => {
  deletedService.deletedEvents(req.params.userId).then((result) => {
    res.json(result);
  });
});

app.listen(3000, () => {
  console.log("Running on port : 3000 ::::");
});
