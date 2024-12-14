const pool = require("../config/db");

const getEvents = async (req, res) => {
  try {
    const events = await pool.query("SELECT * FROM events");
    res.json({ events: events.rows });
  } catch (error) {
    console.log("Error getting events", error);
    res.status(500).json({ message: "Error getting events", error: error.message });
  }
};

const createEvent = async (req, res) => {
  const { name, description, event_type, capacity, event_date, event_time, location, created_by } = req.body;
  let available_seats = capacity;
  try {
    const newEvent = await pool.query("INSERT INTO events (name, description, event_date, event_time, location, capacity, available_seats, type, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, description, event_date, event_time, location, capacity, available_seats, event_type, created_by]);
    console.log("Event created successfully");
    res.json({ message: "Event created successfully", });
  } catch (error) {
    console.log("Error creating event", error);
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

module.exports = { getEvents, createEvent };
