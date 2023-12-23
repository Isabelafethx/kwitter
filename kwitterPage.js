//LINKS FIREBASE
const firebaseConfig = {
      apiKey: "AIzaSyD6Y1D1B09UmjAxdiuPQ5yRJMm4O35JT98",
      authDomain: "kwitter-vamos-conversar.firebaseapp.com",
      databaseURL: "https://kwitter-vamos-conversar-default-rtdb.firebaseio.com",
      projectId: "kwitter-vamos-conversar",
      storageBucket: "kwitter-vamos-conversar.appspot.com",
      messagingSenderId: "771031171966",
      appId: "1:771031171966:web:d3b32e2411ed3ea440e92f"
    };
    firebase.initializeApp(firebaseConfig);

    function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like:0
  });
  document.getElementById("msg").value = "";
}
    
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;

         console.log(firebaseMessageId);
         console.log(messageData);
         name = messageData['name'];
         message = messageData['message'];
         like = messageData['like'];
         nameWithTag = = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"; 
         messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
         likeButton ="<button class='btn btn-warning' id="+firebaseMessageId+"value="+like+"onclik='uptadeLike(this.id)'>";
         spanWithTag = "<span class='glyphicon glyphicon-thubs-up'>Like: "+ like+"</span></button><hr>";
         
         row= namWithTag + messageWithTag +likeButton + spanWithTag;
         document.getElementById("output").innerHTML += row;



//Fim do código
      } });   }); }
getData();

function update(messageId)
{
      console.log("BOTÃO LIKE PRESSIONADO - " + messageId);
      button_id = messageId;
      likes= document.getElementById(button_id).value;
      updatedLikes = Number(likes) +1;
      console.log(updatedLikes);
      
      firebase.database().ref(roomName.child(messageId).update({
            like : updatedLikes
      }));
}

function logout() {
      localStorage.removeItem("userName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
    }