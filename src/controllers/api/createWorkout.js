const { Workout } = require("../../models");

// to do whats this function supposed to do. do i need the req.body figure out
const createWorkout = async (req, res) => {
  const { body } = req;
  const workout = {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    ...body,
  };

  try {
    const newWorkout = await Workout.create(workout);
    return res.status(200).json(newWorkout);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = createWorkout;
