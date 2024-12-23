import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("user connected");

  ws.on("message", function incoming(data) {
    if (data.toString() === "ping") {
      ws.send("pong");
    }
  });
});
