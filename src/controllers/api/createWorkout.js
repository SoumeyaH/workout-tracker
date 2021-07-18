const { Workout } = require("../../models");

const createWorkout = async (req, res) => {
  const { body: workout } = req;

  try {
    const newWorkout = await Workout.create(workout);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = createWorkout;
