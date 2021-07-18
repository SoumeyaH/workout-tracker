const { Workout } = require("../../models");

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(id, {
      $push: { exercises: body },
    });

    return res.status(200).json(updatedWorkout);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = updateWorkout;
