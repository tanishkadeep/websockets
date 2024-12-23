import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("user connected");
  //server to client
  ws.send("something");

  //client to server
  ws.on("message", function incoming(data) {
    console.log(data.toString());
  });
});
