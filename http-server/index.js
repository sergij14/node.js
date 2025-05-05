const server = require("http").createServer();

server.on("request", (req,res) => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Hellddo', +req.method)
});

server.listen(8000, () => {
  console.log("server started");
});
