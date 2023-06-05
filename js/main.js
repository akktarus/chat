const user1 = document.getElementById("left-pseudo");
const user2 = document.getElementById("right-pseudo");
const msgp1 = document.getElementById("message-p1");
const msgp2 = document.getElementById("message-p2");
const btn1 = document.getElementById("send-p1");
const btn2 = document.getElementById("send-p2");
const mainBlockMessage = document.getElementById("main-content-message");

addEventListener("click", writeTxt(btn1));
let username1 = "";
let username2 = "";
let namePicked1 = false;
let namePicked2 = false;

function getName(btn) {
  if (btn == "send-p1" && user1.value != "") {
    username1 = user1.value;
    user1.disabled = true;
    namePicked1 = true;
    writeTxt(btn, username1);
  }
  if (btn == "send-p2" && user2.value != "") {
    username2 = user2.value;
    user2.disabled = true;
    namePicked2 = true;
    writeTxt(btn, username2);
  }
}

function writeTxt(btn, username) {
  let message;
  let messageComplet;
  if (btn == "send-p1" && (msgp1.value != "")) {
    message = msgp1.value;
    messageComplet = new Date() + " From " + username + " : " + message;
    addToChat (messageComplet,"msgp1");
    msgp1.value = "";
  }
  if (btn == "send-p2" && (msgp2.value != "")) {
    message = msgp2.value;
    messageComplet = new Date() + " From " + username + " : " + message;
    addToChat (messageComplet,"msgp2");
    msgp2.value = "";
  }
  
}

function addToChat (mes, user){
  const messageTochat = document.createElement("span");
  messageTochat.innerHTML = mes;
  messageTochat.setAttribute("class",user);
  mainBlockMessage.appendChild(messageTochat);
}