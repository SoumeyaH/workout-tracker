const path = require("path");

const renderHome = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../../../public/index.html"));
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = renderHome;
