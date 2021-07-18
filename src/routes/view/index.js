const { Router } = require("express");

const {
  renderExercises,
  renderHome,
  renderStats,
} = require("../../controllers/view");

const router = Router();

router.get("/exercise", renderExercises);

router.get("/stats", renderStats);

router.get("/", renderHome);

module.exports = router;
