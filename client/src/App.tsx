import { useEffect, useState, useRef } from "react";

function App() {
  const [webSocket, setWebSocket] = useState<WebSocket | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);
  const [response, setResponse] = useState<Array<string>>([]);

  function sendMessage() {
    const message = inputRef.current?.value;
    if (message) webSocket?.send(message);
  }

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    setWebSocket(socket);

    socket.onmessage = (event) => {
      setResponse((prevResponse) => [...prevResponse, event.data]);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <input
        type="text"
        placeholder="message..."
        className="border-2 px-2 py-0.5 rounded-md outline-neutral-400"
        ref={inputRef}
      />
      <button
        onClick={sendMessage}
        className="px-3 py-1 font-semibold text-white rounded-md bg-neutral-800 hover:bg-neutral-700"
      >
        send
      </button>

      <div className="mt-4">
        {response.map((message, index) => (
          <p key={index} className="mt-1">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
