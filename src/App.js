import { useState, useEffect } from "react";
import { createConnection } from "./chat";
import { GeneralRoom, DanceRoom, TravelRoom, MusicRoom } from "./rooms";

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost')

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()
    return () => {
      connection.disconnect()
    }
  }, [roomId, serverUrl]);

  return (
    <>
      <div></div>
    </>
  )
}

export default function App() {
  const [roomId, setRoomId] = useState("general")
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="top">
        <div className='selectors'>
          <label>
            Выберите комнату: {""}
            <select value={roomId} onChange={e => setRoomId(e.target.value)}>
              <option value="general">general</option>
              <option value="dance">dance</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
            </select>
          </label>
        </div>
        <button onClick={() => { setShow(!show) }}>
          {show ? "close" : "open chat"}
        </button>
        <p>Комната: {roomId}</p>
      </div>

      {show && <ChatRoom roomId={roomId} />}
      {show && roomId === "general" && <GeneralRoom />}
      {show && roomId === "dance" && <DanceRoom />}
      {show && roomId === "travel" && <TravelRoom />}
      {show && roomId === "music" && <MusicRoom />}
    </>
  )
}
