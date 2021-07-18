const { Workout } = require("../../models");

const updateWorkout = async (req, res) => {
  console.log("add", req.body);
  res.json({ message: "updateWorkout function" });
};

module.exports = updateWorkout;
