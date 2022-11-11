const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EVENTCREATOR", {
  useNewUrlParser: true,
});

const User = mongoose.model("User", {
  userId: Number,
  dob: String,
  email: String,
  pswd: String,
});

const Event = mongoose.model("Event", {
  event_name: String,
  event_date: String,
  userId: Number,
  priority: String,
});

const DeletedEvent = mongoose.model("DeletedEvent", {
  event_name: String,
  event_date: String,
  userId: Number,
  Priority: String,
});

module.exports = { User, Event, DeletedEvent };
