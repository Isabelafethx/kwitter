//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD6Y1D1B09UmjAxdiuPQ5yRJMm4O35JT98",
  authDomain: "kwitter-vamos-conversar.firebaseapp.com",
  databaseURL: "https://kwitter-vamos-conversar-default-rtdb.firebaseio.com",
  projectId: "kwitter-vamos-conversar",
  storageBucket: "kwitter-vamos-conversar.appspot.com",
  messagingSenderId: "771031171966",
  appId: "1:771031171966:web:d3b32e2411ed3ea440e92f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref(/).child(room_name).uptade({
    purpose : "adding room name";
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       //início do código
      console.log("Room Name - " Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
       //fim do código
    });
  });

}

getData();


function redirecToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  window.location = "index.html";
}