
const User = require('../models/User');


exports.updateData = async (req, res) => {
  const { userId } = req.user;
  const updateData = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getData = async (req, res) => {
  const { userId } = req.user;

  try {
    const user = await User.findById(userId).select('-password');
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
