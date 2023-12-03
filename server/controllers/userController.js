const User = require("./userModel");

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res
        .status(409)
        .json({ msg: "User with the same email or username already exists" });
    }

    const newUser = await User.create({ username, email, password });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ msg: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res
        .status(404)
        .json({ msg: "User with these contacts doesn't exist" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ msg: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username && !email) {
      return res.status(400).json({
        error: "At least one of username or email must have a value.",
      });
    }

    const updatedUser = await User.findOneAndUpdate(
      { $or: [{ email }, { username }] },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "No user found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { username, email } = req.body;

    const deletedUser = await User.deleteOne({
      $or: [{ email }, { username }],
    });

    if (deletedUser.deletedCount === 0) {
      return res
        .status(404)
        .json({ msg: "User with these contacts doesn't exist" });
    }

    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };