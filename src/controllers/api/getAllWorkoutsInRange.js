const { Workout } = require("../../models");

const getAllWorkoutsInRange = async (req, res) => {
  try {
    const workoutsRange = await Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
      .sort({ day: 1 })
      .limit(7);

    return res.status(200).json(workoutsRange);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = getAllWorkoutsInRange;
