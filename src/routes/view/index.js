const { Router } = require("express");
const path = require("path");

const router = Router();

router.get("/exercise", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/exercise.html"));
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/stats", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/stats.html"));
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
