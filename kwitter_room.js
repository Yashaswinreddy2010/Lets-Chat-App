var firebaseConfig = {
  apiKey: "AIzaSyCrZ4L_cCpS9dt00dN1GP7d72bJ4E1QiXQ",
  authDomain: "kwitter-c49b3.firebaseapp.com",
  databaseURL: "https://kwitter-c49b3.firebaseio.com",
  projectId: "kwitter-c49b3",
  storageBucket: "kwitter-c49b3.appspot.com",
  messagingSenderId: "467218803457",
  appId: "1:467218803457:web:43d02995ebfcd8b0248900",
  measurementId: "G-1X4ZG4T0JH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
