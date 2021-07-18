const { Workout } = require("../../models");

// to do whats this function supposed to do. do i need the req.body figure out
const createWorkout = async (req, res) => {
  const { body } = req;
  console.log("1 create body", req.body);
  const workout = {
    day: new Date(new Date().setDate(new Date().getDate() - 9)),
    ...body,
  };

  console.log("2 create workout", workout);
  try {
    const newWorkout = await Workout.create(workout);
    console.log("3 create new", newWorkout);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = createWorkout;
