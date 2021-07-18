const { Workout } = require("../../models");

const createWorkout = async (req, res) => {
  console.log("create", req.body);
  const { type, name, weight, sets, reps, duration } = req.body;

  if (type === "cardio") {
    const workout = {
      type,
      name,
      distance,
      duration,
    };
    console.log(workout);
  }

  if (type === "resistance") {
    const workout = {
      // to do day: install moment to add current time
      exercises: [
        {
          type,
          name,
          weight,
          sets,
          reps,
          duration,
        },
      ],
    };
  }
  try {
    const newWorkout = await Workout.create(workout);
    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = createWorkout;
