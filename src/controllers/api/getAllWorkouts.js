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
    return res.status(200).json(workouts);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getAllWorkouts;
