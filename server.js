import pkg from 'json-server';
const { create, router: _router, defaults, rewriter } = pkg;
const server = create();
const router = _router("./db.json");
const middlewares = defaults({
  static: "./build",
});
const PORT = process.env.PORT || 3333;

console.log(PORT);

server.use(middlewares);
server.use(
  rewriter({
    "/api/*": "/$1",
  })
);
server.use(router);
server.listen(PORT, () => {
  console.log("Server is running");
});