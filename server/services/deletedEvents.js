const db = require("./db");

const deleteEvent = (event_name, event_date) => {
  return db.Event.deleteOne({ event_name, event_date }).then((event) => {
    if (event) {
      return {
        statusCode: 222,
        status: true,
        message: "Event is deleted",
      };
    }
  });
};

const deletedEvent = (event_name, event_date, userId, priority) => {
  return db.DeletedEvent.findOne({ event_name, event_date, userId }).then(
    (deletedevent) => {
      if (!deletedevent) {
        const deleteEvent = new db.DeletedEvent({
          event_name,
          event_date,
          userId,
          priority,
        });
        deleteEvent.save();
        return {
          event_name,
          event_date,
          userId,
          priority,
        };
      }
    }
  );
};

const deletedEvents = (userId) => {
  return db.DeletedEvent.find({ userId }).then((events) => {
    if (events) {
      return events;
    }
  });
};

module.exports = { deleteEvent, deletedEvent, deletedEvents };
