function talkButton() {
  var objDiv = document.getElementById("chat-area");
  var greetResponse = ["Hello", "What do YOU want", "What is it", "I'm busy can we wait till later", "Greetings", "Yeah, hi"]
  var randomResponse = Math.floor(Math.random() * 6) + 0;
  var currentdate = new Date();
  var hours = currentdate.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  else if (hours === 0) {
     hours = 12;
  }
  var datetime = "It is currently " + hours + ":" + currentdate.getMinutes();
  var response = {
    "how old are you": "Very",
    "how old are you?": "Very",
    "hey": greetResponse[randomResponse],
    "hello": greetResponse[randomResponse],
    "hi": greetResponse[randomResponse],
    "yo": greetResponse[randomResponse],
    "hello devin": greetResponse[randomResponse],
    "greetings": greetResponse[randomResponse],
    "what is your name": "Gerardo Guzman",
    "whats your name": "Gerardo Guzman",
    "what time is it": datetime,  "whats the time": datetime,
    "where are you from": "This computer",
    "what is your favorite color": "Red",
    "whats your favorite color": "Red",
    "what is your favorite food": "Pizza",
    "whats your favorite food": "Pizza",
    "how are you": "Good",
    "what do you mean": "I don't know",
    "what is your gender": "other",
    "when is your birthday": "The day  I was born",
    "why": "Why not",
    "i hate you": "same",
    "i like you": "I do not",
    "i love you": "I can only love Harambe",
    "what color is your hair": "Purple",
    "who am i": "Harambe",
    "what are you": "A legend",
    "who are you": "Your god",
    "i dont care": "Good",
    "are you religious": "No",
    "are you god": "No",
    "what do you do on your freetime": "Pray to Harambe"
  }

  var nonsense = ["leave", "Wow...", "aren't you supposed to be asleep", "quit it", "Don't ask me that", "listen to your parents", "Probably", "I don't have to answer that", "I don't appreciate your attitude", "You sadden me"]
  var random = Math.floor(Math.random() * 13) + 0;

  //document.getElementById('chat-area').textContent = document.getElementById('input').value;
  if(document.getElementById('input').value != "") {
  //$("#chat-area").append(document.getElementById('input').value += "</br>");
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     //$("#chat-area").append("<div class='grey'>I didn't quite understand that</div></br>");
     $("#chat-area").append("<div class='grey'>" + nonsense[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}
else {
  if(response[message] == "Yes") {
    txt = "a";
    while(1) {
      txt = txt += "a";
    }
  }
  else {
  $("#chat-area").append("<div class='grey'>" + response[message] + "</div>" + "</br>");
  console.log(response[message]);
  document.getElementById('input').value = "";
  objDiv.scrollTop = objDiv.scrollHeight;
}
}
}
  //if(document.getElementById('input').value == responseArray){
  //  document.getElementById('chat-area').textContent = "Hello, how are you?";
  //}
  //else {
  //  document.getElementById('chat-area').textContent = "I'm sorry, I didn't quite get that";
  //}
}

//var possibleGreetings = {
//	"Hello": "Hi",
//	"hello": "Hi",
//}
