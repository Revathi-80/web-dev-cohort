const http = require("http");

class getChaiRoutes {
  constructor() {
    this.routes = { GET: {}, POST: {} };
  }
  getChai(path, callbackFn) {
    this.routes.GET[path] = callbackFn;
  }
  postChai(path, callbackFn) {
    this.routes.POST[path] = callbackFn;
  }

  suno(port, callbackFn) {
    const server = http.createServer((req, res) => {
      const { method, url } = req;
      if (this.routes[method][url]) {
        this.routes[method][url](req, res);
      } else {
        res.statusCode = 404;
        res.end("Not found");
      }
    });
    server.listen(port, callbackFn);
  }
}

module.exports = getChaiRoutes;
