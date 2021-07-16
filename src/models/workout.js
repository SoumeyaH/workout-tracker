const mongoose = require("mongoose");

const schema = {
  day: Date,
  exercises: [
    {
      name: {
        type: String,
        // required: true,
      },
      type: {
        type: String,
        // enum: ["cardio", "resistance"],
        // required: true,
      },
      duration: {
        type: Number,
        // required: true,
      },
      distance: {
        type: Number,
        // required: true,
      },
      weight: {
        type: Number,
        // required: true,
      },
      reps: {
        type: Number,
        // required: true,
      },
      sets: {
        type: Number,
        // required: true,
      },
    },
  ],
};

const WorkoutSchema = new mongoose.Schema(schema);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
