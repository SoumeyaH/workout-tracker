const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
            // to do - maybe add total distance?
          },
        },
      },
    ]);
    res.json(workouts);
  } catch (error) {
    res.json(error);
  }
};

module.exports = getAllWorkouts;
