const createWorkout = (req, res) => {
  console.log(req.body);
  res.json({ message: "createWorkout function" });
};

module.exports = createWorkout;
