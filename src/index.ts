import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("user connected");
  ws.send("something");

  setInterval(() => {
    ws.send(Math.random());
  }, 500);
});
