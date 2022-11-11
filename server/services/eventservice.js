const db = require("./db");

const eventCreate = (event_name, event_date, userId, priority) => {
  return db.User.findOne({ userId }).then((user) => {
    if (user) {
      const newEvent = new db.Event({
        event_name,
        event_date,
        userId,
        priority,
      });
      newEvent.save();
      return {
        statusCode: 210,
        status: true,
        message: "Event Created",
        event_name,
      };
    } else {
      return {
        statusCode: 410,
        status: false,
        message: "User does not exist",
      };
    }
  });
};

const eventTable = (userId) => {
  return db.Event.find({ userId }).then((events) => {
    if (events) {
      console.log(events);
      return events;
    }
  });
};

const singleEvent = (event_name, event_date) => {
  return db.Event.findOne({ event_name, event_date }).then((event) => {
    if (event) {
      console.log(event);
      return {
        eventname: event.event_name,
        eventdate: event.event_date,
        userid: event.userId,
        priority: event.priority,
      };
    }
  });
};

module.exports = {
  eventCreate,
  eventTable,
  singleEvent,
};
