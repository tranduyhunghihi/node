const getHomePage = (req, res) => {
  res.send("Hello world");
};

const getABC = (req, res) => {
  res.send("Hung dep trai vl hihi");
};

const getHungdeptrai = (req, res) => {
  // res.send("<h1>Hello world</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  getABC,
  getHungdeptrai,
};
