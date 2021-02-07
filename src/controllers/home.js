const ctrl = {};

ctrl.index = (req, res) => {
  res.send("Index Page from Controller");
};

module.exports = ctrl;