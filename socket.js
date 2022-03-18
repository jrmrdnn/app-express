import { Server } from "socket.io";
//import jwt from "jsonwebtoken";

const Socket = (server) => {
  // Init server socket
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  // Verif token
  // io.use((socket, next) => {
  //   if (socket.handshake.auth.token) {
  //     jwt.verify(
  //       socket.handshake.auth.token,
  //       process.env.JWT_SECRET_KEY,
  //       (err, decoded) => {
  //         if (err) return next(new Error("Authentication error"));
  //         socket.decoded = decoded;
  //         next();
  //       }
  //     );
  //   } else {
  //     next(new Error("Authentication error"));
  //   }
  // });

  io.on("connection", (socket) => {
    const userId = socket.id;
    console.log("connection", userId);

    // const { id, username } = socket.decoded;
    // socket.broadcast.emit("new user", { username });

    // socket.on("msg", (value) => {
    //   io.emit("msg", value);
    // });

    // const list = [];
    // io.emit("list", { list });

    socket.on("disconnect", () => {
      console.log("disconnect");
    });
  });
};

export default Socket;
