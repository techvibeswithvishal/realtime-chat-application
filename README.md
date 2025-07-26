# 💬 Wassup Chat App

A beginner-friendly real-time chat application using **Node.js**, **Express**, and **Socket.IO**. This project helps you understand how real-time communication works, just like in apps such as WhatsApp, Telegram, or Messenger.

---

## 🚀 Features

- 🔄 Real-time bi-directional messaging using **WebSockets**
- 💻 Simple, clean, and responsive user interface
- 🟢 Message broadcasting to all connected users
- ⚡ Fast and minimal setup — perfect for learning Socket.IO

---

## 🧠 How It Works

Wassup Chat App uses **Socket.IO** to create a persistent connection between the client and server. Here's how it works:

1. The **client connects** to the server via Socket.IO.
2. The **user types a message** and sends it.
3. The **client emits** the message via ]
4. The **server listens** and receives it using ]
5. The **server broadcasts** the message to all other connected clients using `socket.broadcast.emit`.

---

## 📁 Project Structure
**realtime-chat-application/
├── public/
│ ├── client.js
│ ├── index.html 
│ ├── style.css
│ └── wassup.png
├── server.js
├── package.json
└── README.md **


### ✅ 👍 terminal command
npm init -y
npm install express socket.io
node server.js




UI:-

<img width="1366" height="768" alt="Screenshot (110)" src="https://github.com/user-attachments/assets/3762958b-a19f-4079-bace-a29e8b52cca0" />





<img width="1366" height="768" alt="Screenshot (113)" src="https://github.com/user-attachments/assets/5a709837-0920-4e23-86e1-fbe108855266" />





