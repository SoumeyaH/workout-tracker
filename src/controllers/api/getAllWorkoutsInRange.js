const { Workout } = require("../../models");

const getAllWorkoutsInRange = async (req, res) => {
  console.log("getrange", req.body);
  res.json({ message: "getAllWorkoutsInRange function" });
};

module.exports = getAllWorkoutsInRange;
