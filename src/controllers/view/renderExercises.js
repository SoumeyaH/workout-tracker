const path = require("path");

const renderExercises = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = renderExercises;
