const { Workout } = require("../../models");

const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  console.log("updated body", body);

  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(id, {
      $push: { exercises: body },
    });

    console.log("updatedWorkout", updatedWorkout);
    res.status(200).json(updatedWorkout);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = updateWorkout;
