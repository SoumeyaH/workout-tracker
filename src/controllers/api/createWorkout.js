const { Workout } = require("../../models");

const createWorkout = async (req, res) => {
  const { body } = req;

  const workout = {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    ...body,
  };

  try {
    const newWorkout = await Workout.create(workout);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = createWorkout;
