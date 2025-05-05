const server = require("net").createServer();

let id = 0;
let sockets = {};

server.on("connection", (socket) => {
  console.log("welcome");
  socket.id = id;
  id++;

  socket.write("write your name:");

  socket.on("data", (data) => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      sockets[socket.id] = socket;
      console.log(socket.name + "connected");

      return;
    }

    Object.keys(sockets).forEach((id) => {
      if (id !== socket.id) {
        const now = new Date();
        sockets[id].write(
          `${socket.name} ${now.getHours()}:${now.getMinutes()} : `
        );
        sockets[id].write(data);
      }
    });
  });

  socket.on("end", () => {
    delete sockets[socket.id];
    console.log(socket.name + "disconnected");
  });
});

server.listen(8000, () => {
  console.log("server started");
});
