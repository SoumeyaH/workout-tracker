const path = require("path");

const renderStats = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/stats.html"));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = renderStats;
