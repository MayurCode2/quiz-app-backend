const User = require('../model/User');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Create a new user
    const user = new User({
      username,
      password,
    });

    // Save the user
    await user.save();

    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
    console.log(error)
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
