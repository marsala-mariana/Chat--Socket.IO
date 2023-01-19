const io = require("socket.io")(3000, {
  cors: {
    origin: "http://127.0.0.1:5500/",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
//conexion
io.on("connection", (socket) => {
  console.log("SE A CREADO UNA NUEVA CONEXION");

  socket.on("userMessage", (message) => {
    io.emit("message", message);
  });
});
