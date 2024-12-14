const pool = require("../config/db");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, preferences } = req.body;
    const user = await pool.query("INSERT INTO users (name, email, password, role, preferences) VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, email, password,  role, preferences]);
    res.json({message: "User created successfully", user: user.rows[0]});
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1 AND password = $2", [email, password]);
    res.json({message: "Login successful", user: user.rows[0]});
  } catch (error) {
    console.log("Error logging in", error);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};

module.exports = { registerUser, loginUser };


