const fs = require("fs");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // solution 1
  fs.readFile("./test-file.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    else res.end(data);
  });
  // Solution 2: Streams
  const readable1 = fs.createReadStream("./test-file.txt");
  readable1.on("data", (chunk) => {
    res.write(chunk);
  });
  readable1.on("end", () => {
    res.end();
  });
  readable1.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  });

  //Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //   readable source
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server listening on the port 3000");
});
