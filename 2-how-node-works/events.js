const EventsEmitter = require("events");
const http = require("http");

class Sale extends EventsEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new EventsEmitter();

myEmitter.on("newSale", () => {
  console.log("New Sale");
});
myEmitter.on("newSale", () => {
  console.log("Customer name is Pritam");
});
myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} iteams left in stock.`);
});

myEmitter.emit("newSale", 9);

////////////////////////////////////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  console.log("Request received");
  res.end("Another request 😊");
});

server.on("close", () => {
  console.log("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request..........");
});
