import { createEffect, createSignal } from "solid-js";

export default function Home() {
  const [ws, setWs] = createSignal<WebSocket>();

  createEffect(() => {
    const ws = new WebSocket("wss://startling-pavlova-0a9bcb.netlify.app/_ws");
    ws.onopen = () => {
      console.log("WebSocket opened client");
    };
    ws.onmessage = (event) => {
      console.log("WebSocket message client", event);
    };

    setWs(ws)
  });

  return (
    <button onClick={() => ws()?.send('test')}>send</button>
  );
}
