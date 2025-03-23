const getChaiRoutes = require("./cohort");

const chaiServer = new getChaiRoutes();

chaiServer.getChai("/", (req, res) => {
  res.end("Got my Lemon Chai!");
});

chaiServer.suno(3000, () => {
  console.log("Server is running on port 3000");
});

