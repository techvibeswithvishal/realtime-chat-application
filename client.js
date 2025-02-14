const socket = io()

// Client message send logic 

let name
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
do{
    name = prompt('Enter your name :  ')
}while(!name)

textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage(message){
    let msg = {
        user:name,
        message:message.trim()
    }

    //Append the message on the message area

    appendMessage(msg,'outgoing')
    textarea.value ='' 
    scrollToBottom()

    //Sending this message to server via socket

    socket.emit('message',msg)
}

function appendMessage(msg, type){
    let mainDiv = document.createElement('div')
    let classname = type
    
    //connecting mainDiv to outgoing message div

    mainDiv.classList.add(classname, 'message')
    
    //creating dynamic message to be sent to the server

    let markup = `
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    `
    //inserting the message into the outgoing message div

    mainDiv.innerHTML = markup

    //Appending this dynamic created outgoing message div to the message area

    messageArea.appendChild(mainDiv)
}

//receive message from server via socket

socket.on('message',(msg)=>{
    appendMessage(msg,'incoming')
    scrollToBottom()
})

//function to automatically sroll to the recent message

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}