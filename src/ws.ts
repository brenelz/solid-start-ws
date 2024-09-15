import { defineWebSocket, eventHandler } from "vinxi/http";

export default eventHandler({
    handler: () => { },
    websocket: defineWebSocket({
        async open(peer) {
            console.log("WebSocket opened server");

            peer.subscribe("chat");
        },
        async message(peer, event) {
            console.log(event);
            peer.publish("chat", `[${peer}] ${event}`);
        },
        async close(event) {
            console.log("WebSocket closed server");
        },
    }),
});