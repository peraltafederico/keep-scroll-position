import "./styles.css";
import useMessages from "./useMessages";

export default function App() {
  const { messages, containerRef, setLastMessageRef } = useMessages();

  return (
    <div className="App">
      <h1>Keep Scroll Positon On Chat Re-render</h1>
      <div className="chat" ref={containerRef}>
        {messages.map((m, i) => (
          <div
            key={m.id}
            className={`message ${m.in ? "message--in" : "message--out"}`}
          >
            <div ref={(ref) => (i === 0 ? setLastMessageRef(ref) : null)}>
              {m.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
