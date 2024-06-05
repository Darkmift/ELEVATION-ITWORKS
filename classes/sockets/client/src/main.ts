import './style.css'
import { io } from "socket.io-client";

const VITE_SERVER_URI = import.meta.env.VITE_SERVER_URI as string;
const socket = io(VITE_SERVER_URI);
let clientName = '';

socket.on("connect", () => {
  console.log({ socket, event: "connect" });
});

socket.on("disconnect", () => {
  console.log({ socket, event: "disconnect" });
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
  <div>
    <h1>SOCKETS</h1>
    <div class="card">
      <input class="input" type="text" id="set-name"/>
      <button type="button" id="set-name-btn">Set Name</button>
    </div>
    <div class="card">
      <div id="messages" class="messages"></div>
    </div>
    <div class="card">
      <input class="input" type="text" id="send-msg-input"/>
      <button type="button" id="send-msg-btn">Send</button>
    </div>
  </div>
`;

const setNameInput = document.querySelector<HTMLInputElement>('#set-name')!;
const setNameBtn = document.querySelector<HTMLButtonElement>('#set-name-btn')!;
const messages = document.querySelector<HTMLDivElement>('#messages')!;
const sendMsgInput = document.querySelector<HTMLInputElement>('#send-msg-input')!;
const sendMsgBtn = document.querySelector<HTMLButtonElement>('#send-msg-btn')!;

setNameBtn.addEventListener('click', () => {
  clientName = setNameInput.value;
  socket.emit('client:setname', clientName);
});

sendMsgBtn.addEventListener('click', () => {
  const msg = sendMsgInput.value;
  messages.innerHTML += `<p class="sender chat-bubble">${clientName}: ${msg}</p>`;
  socket.emit('client:message', msg);
  sendMsgInput.value = '';
});

socket.on('server:message', ({ clientName, msg }) => {
  messages.innerHTML += `<p class="reader chat-bubble">${clientName}: ${msg}</p>`;
});
