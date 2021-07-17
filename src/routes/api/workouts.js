const { Router } = require("express");

const {
  getAllWorkoutsInRange,
  getAllWorkouts,
  createWorkout,
  updateWorkout,
} = require("../../controllers/api");

const router = Router();

router.get("/range", getAllWorkoutsInRange);
router.get("/", getAllWorkouts);

router.post("/", createWorkout);

router.put("/:id", updateWorkout);

module.exports = router;
